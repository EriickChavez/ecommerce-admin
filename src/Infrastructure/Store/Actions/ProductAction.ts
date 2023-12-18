import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product, ProductInput} from '../../../Domain/Entity';
import RNFetchBlob from 'rn-fetch-blob';
import {Config} from '../../../Config/ENV';
import {buildFetchBodyProduct} from '../../../Utils/productBodyConstructor';
import {Platform} from 'react-native';

export const fetchNewProducts = createAsyncThunk<
  {
    data: Product;
    error: string | null;
    status: number;
  },
  {newProduct: ProductInput; type: string}
>(
  'productSlice/fetchNewProducts',
  async ({
    newProduct,
    type,
  }): Promise<{
    data: Product;
    error: string | null;
    status: number;
  }> => {
    // const URL: string = Config.API_URL + '/product/add';
    const URL: string =
      type === 'cover'
        ? Config.API_URL + '/product/add/'
        : Config.API_URL + '/product/add/album';
    const METHOD = 'POST';
    const HEADERS = {'Content-Type': 'multipart/form-data'};
    const userId = 'soyUnIdDePrueba'; // newProduct.userId;
    const filename = `${userId}.${type}-${newProduct.title}.jpg`;

    const body = buildFetchBodyProduct(newProduct, type, filename, type);

    try {
      const resp = await RNFetchBlob.fetch(METHOD, URL, HEADERS, body);
      const resInJson = JSON.parse(resp.data);
      return {
        data: resInJson,
        error: null,
        status: 200,
      };
    } catch (err) {
      throw new Error(`${err}`);
    }
  },
);

export const fetchPictureAlbum = createAsyncThunk<
  {
    data: Product;
    error: string | null;
    status: number;
  },
  {newProduct: ProductInput; type: string}
>(
  '',
  async ({
    newProduct,
  }): Promise<{
    data: Product;
    error: string | null;
    status: number;
  }> => {
    const URL: string = Config.API_URL + '/product/add/album';
    const METHOD = 'POST';
    const HEADERS = {'Content-Type': 'multipart/form-data'};
    const userId = 'soyUnIdDePrueba'; // newProduct.userId;
    try {
      let index = 0;
      const filename =
        userId + '*' + index + '.album-' + newProduct.title + '.jpg';
      const album = newProduct?.album ?? [];
      if (album.length > 0) {
        RNFetchBlob.fetch(METHOD, URL, HEADERS, [
          {
            name: 'album',
            filename,
            type: 'image/jpg',
            data: RNFetchBlob.wrap(
              Platform.OS === 'ios'
                ? album?.[0].replace('file://', '')
                : album?.[0],
            ),
          },
        ])
          .then(resp => {
            const resInJson = JSON.parse(resp.data);
            console.info({resInJson});
            return {
              data: resInJson,
              error: null,
              status: 200,
            };
          })
          .catch(err => {
            console.error(err);
          });
        index++;
      } else {
        console.log('no hay album');
      }
    } catch (err) {
      console.warn({err});
    }
    return {
      data: newProduct as Product,
      error: null,
      status: 200,
    };
  },
);
