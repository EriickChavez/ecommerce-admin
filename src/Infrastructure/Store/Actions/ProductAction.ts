import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product, ProductInput} from '../../../Domain/Entity';
import RNFetchBlob from 'rn-fetch-blob';
import {Config} from '../../../Config/ENV';
import {buildFetchBodyProduct} from '../../../Utils/productBodyConstructor';

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
