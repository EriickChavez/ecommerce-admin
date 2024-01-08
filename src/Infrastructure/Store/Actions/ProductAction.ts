import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product, ProductInput} from '../../../Domain/Entity';
import RNFetchBlob from 'rn-fetch-blob';
import {Config} from '../../../Config/ENV';
// import {buildFetchBodyProduct} from '../../../Utils/productBodyConstructor';
import {Platform} from 'react-native';
import {RESIZE_IMAGE, resizeImage} from '../../../Utils/imageUtils';
export const fetchProductsByUserId = createAsyncThunk<
  {
    data: Product[];
    error: string | null;
    status: number;
  },
  {userId: string; token: string}
>(
  'productSlice/fetchProducts',
  async ({
    userId,
    token,
  }): Promise<{
    data: Product[];
    error: string | null;
    status: number;
  }> => {
    const URL: string = 'http://localhost:3000/product/productsByUser';
    const METHOD = 'POST';
    const HEADERS = {
      'Content-Type': 'application/json',
      authentication: `Bearer ${token}`,
    };
    const BODY = {
      user_id: userId,
    };

    try {
      const response = await fetch(URL, {
        method: METHOD,
        headers: HEADERS,
        body: JSON.stringify(BODY),
      });
      const res = await response.json();
      return {
        data: res,
        error: null,
        status: response.status,
      };
    } catch (err) {
      throw err;
    }
  },
);

export const fetchNewProducts = createAsyncThunk<
  {
    data: Product;
    error: string | null;
    status: number;
  },
  {newProduct: ProductInput; type: string; token: string}
>(
  'productSlice/fetchNewProducts',
  async ({
    newProduct,
    token,
  }): Promise<{
    data: Product;
    error: string | null;
    status: number;
  }> => {
    const URL: string = Config.API_ADMIN_URL + '/product/add/';
    const METHOD = 'POST';
    const HEADERS = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    try {
      const resp = await fetch(URL, {
        method: METHOD,
        headers: HEADERS,
        body: JSON.stringify(newProduct),
      });

      const res = await resp.json();
      const resInJson = res;
      let productWithCover: Product | null = null;
      if (newProduct.cover) {
        productWithCover = (await fetchAddProductCoverImage(
          newProduct.userId,
          resInJson,
          newProduct.cover,
          token,
        )) as Product;
      }
      let productWithAlbum: Product | null = null;
      if (newProduct.album) {
        productWithAlbum = (await fetchAddProductAlbum(
          newProduct.userId,
          resInJson,
          newProduct.album,
          token,
        )) as Product;
      }

      return {
        data: productWithAlbum || productWithCover || resInJson,
        error: null,
        status: 200,
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
);
// Creo que se puede borrar
export const fetchPictureAlbum = createAsyncThunk<
  {
    response: boolean;
    error: string | null;
    status: number;
  },
  {album: string[]; type: string; title: string}
>(
  '',
  async ({
    album = [],
    title,
  }): Promise<{
    response: boolean;
    error: string | null;
    status: number;
  }> => {
    const URL: string = Config.API_ADMIN_URL + '/product/add/album';
    const METHOD = 'POST';
    const HEADERS = {'Content-Type': 'multipart/form-data'};
    const userId = 'soyUnIdDePrueba'; // newProduct.userId;
    try {
      for (let index = 0; index < album.length; index++) {
        const filename = userId + '*' + index + '.album-' + title + '.jpg';
        RNFetchBlob.fetch(METHOD, URL, HEADERS, [
          {
            name: 'album',
            filename,
            type: 'image/jpg',
            data: RNFetchBlob.wrap(
              Platform.OS === 'ios'
                ? album?.[index].replace('file://', '')
                : album?.[index],
            ),
          },
        ])
          .then(resp => {
            const resInJson = JSON.parse(resp.data);

            return {
              data: resInJson,
              error: null,
              status: 200,
            };
          })
          .catch(err => {
            throw err;
          });
      }
    } catch (err) {
      console.error({err});
      throw new Error('Algo salio mal al intentar subir el album');
    }
    return {
      response: true,
      error: null,
      status: 200,
    };
  },
);
// Creo que se puede borrar
export const fetchAddProductsAlbum = createAsyncThunk<
  void,
  {
    album: string[];
    product: Product;
    userId: string;
  }
>(
  'productSlice/fetchAddProductsAlbum',
  async ({album, product, userId}): Promise<void> => {
    const URL: string = Config.API_ADMIN_URL + '/product/add/album';
    const METHOD = 'POST';
    const HEADERS = {'Content-Type': 'multipart/form-data'};
    const baseAlbumName = `${userId},${product.id},album`;
    const albumUri: string[] = [];

    for await (const src of album) {
      const newUri = await resizeImage(
        src,
        RESIZE_IMAGE.targetWidth,
        RESIZE_IMAGE.targetHeight,
        RESIZE_IMAGE.compressFormat,
        RESIZE_IMAGE.quality,
      );
      albumUri.push(newUri);
    }
    // abc-123,def-456,cover,cover-Camera,png
    const BODY = albumUri.map((src, index) => {
      return {
        name: 'album',
        filename: `${baseAlbumName},album-${index}-${product.title}.jpg`,
        type: 'image/jpg',
        data: RNFetchBlob.wrap(src.replace('file://', '')),
      };
    });
    try {
      const response = await RNFetchBlob.fetch(METHOD, URL, HEADERS, BODY);
      const resInJson = JSON.parse(response.data);
      console.log({resInJson});
    } catch (err) {
      console.error({err});
      throw new Error('Algo salio mal al intentar subir el album');
    }
  },
);

export const fetchAddProductCover = createAsyncThunk<
  void,
  {
    coverUri: string;
    product: Product;
    userId: string;
  }
>(
  'productSlice/fetchAddProductsCover',
  async ({coverUri, product, userId}): Promise<void> => {
    const URL: string = Config.API_ADMIN_URL + '/product/add/album';
    const METHOD = 'POST';
    const HEADERS = {'Content-Type': 'multipart/form-data'};
    const coverName = `${userId},${product.id},cover,cover-${product.title},png`;

    const newUri = await resizeImage(
      coverUri,
      RESIZE_IMAGE.targetWidth,
      RESIZE_IMAGE.targetHeight,
      RESIZE_IMAGE.compressFormat,
      RESIZE_IMAGE.quality,
    );
    const BODY = [
      {
        name: 'cover',
        filename: coverName,
        type: 'image/png',
        data: RNFetchBlob.wrap(newUri.replace('file://', '')),
      },
    ];
    const response = await RNFetchBlob.fetch(METHOD, URL, HEADERS, BODY);
    const jsonResponse = await response.json();
    console.info('[cover] ->', jsonResponse);
  },
);

export const fetchUpdateProduct = createAsyncThunk<
  {
    updated: {
      cover: boolean;
      album: boolean;
      product: boolean;
    };
    updatedProduct: Product;
    error: string | null;
  },
  {data: ProductInput; idProduct: string; token: string}
>(
  'productSlice/fetchUpdateProduct',
  async ({
    data,
    idProduct,
    token,
  }): Promise<{
    updated: {
      cover: boolean;
      album: boolean;
      product: boolean;
    };
    updatedProduct: Product;
    error: string | null;
  }> => {
    const URL: string = Config.API_ADMIN_URL + '/product/updateProduct';
    const METHOD = 'POST';
    const HEADERS = {
      'Content-Type': 'application/json',
      authentication: `Bearer ${token}`,
    };
    try {
      const resp = await fetch(URL, {
        method: METHOD,
        headers: HEADERS,
        body: JSON.stringify({product: data, id: idProduct}),
      });

      const res = await resp.json();
      const resInJson = res;
      let productWithCover: Product | null = null;
      if (data.cover) {
        productWithCover = (await fetchAddProductCoverImage(
          data.userId,
          resInJson,
          data.cover,
          token,
        )) as Product;
      }
      let productWithAlbum: Product | null = null;
      if (data.album) {
        productWithAlbum = (await fetchAddProductAlbum(
          data.userId,
          resInJson,
          data.album,
          token,
        )) as Product;
      }

      return {
        updated: {
          album: !!productWithAlbum,
          cover: !!productWithCover,
          product: !!resp,
        },
        error: null,
        updatedProduct: productWithAlbum || productWithCover || resInJson,
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
);

export const fetchDeleteProduct = createAsyncThunk<
  {isDeleted: boolean},
  {productId: string}
>(
  'productSlice/fetchDeleteProduct',
  async ({productId}): Promise<{isDeleted: boolean}> => {
    const URL: string = Config.API_ADMIN_URL + '/product/deleteProduct';
    const METHOD = 'DELETE';
    const HEADERS = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await fetch(URL, {
        method: METHOD,
        headers: HEADERS,
        body: JSON.stringify({productId}),
      });
      const res = await response.json();
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
);

const fetchAddProductCoverImage = async (
  userId: string,
  product: Product,
  coverUri: string,
  token: string,
) => {
  const URL: string = Config.API_ADMIN_URL + '/product/addCoverProduct';
  const METHOD = 'POST';
  const HEADERS = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  };

  try {
    const newUri = await resizeImage(
      coverUri,
      RESIZE_IMAGE.targetWidth,
      RESIZE_IMAGE.targetHeight,
      RESIZE_IMAGE.compressFormat,
      RESIZE_IMAGE.quality,
    );
    const BODY = [
      {
        name: 'cover',
        filename:
          userId + ',' + product.id + ',cover,cover-' + product.title + ',png',
        type: 'image/png',
        data: RNFetchBlob.wrap(newUri.replace('file://', '')),
      },
    ];

    const response = await RNFetchBlob.fetch(METHOD, URL, HEADERS, BODY);

    const res = await response.json();
    return res;
  } catch (err) {
    console.info({err});
  }
};
const fetchAddProductAlbum = async (
  userId: string,
  product: Product,
  album: string[],
  token: string,
) => {
  const URL: string = Config.API_ADMIN_URL + '/product/addAlbumProduct';
  const METHOD = 'POST';
  const HEADERS = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  };
  const baseAlbumName = userId + ',' + product.id + ',album' + ',';
  try {
    const albumToUpload = album.filter(src => src !== '');
    const albumUri: string[] = [];
    for await (const src of albumToUpload) {
      const newUri = await resizeImage(
        src,
        RESIZE_IMAGE.targetWidth,
        RESIZE_IMAGE.targetHeight,
        RESIZE_IMAGE.compressFormat,
        RESIZE_IMAGE.quality,
      );
      albumUri.push(newUri);
    }
    const BODY = albumUri.map((src, index) => {
      return {
        name: 'album',
        filename: baseAlbumName + 'foto-' + index + '-album,jpg',
        type: 'image/png',
        data: RNFetchBlob.wrap(src.replace('file://', '')),
      };
    });
    const response = await RNFetchBlob.fetch(METHOD, URL, HEADERS, BODY);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    console.info({err});
  }
};
