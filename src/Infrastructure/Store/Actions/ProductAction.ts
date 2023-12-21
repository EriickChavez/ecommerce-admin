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
        ? Config.API_ADMIN_URL + '/product/add/'
        : Config.API_ADMIN_URL + '/product/add/album';
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
      }
    } catch (err) {
      console.warn({err});
      throw new Error('Algo salio mal al intentar subir el album');
    }
    return {
      response: true,
      error: null,
      status: 200,
    };
  },
);
