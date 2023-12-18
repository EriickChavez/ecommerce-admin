import {createAsyncThunk} from '@reduxjs/toolkit';
import {Config} from '../../../Config/ENV';
import {Category} from '../../../Domain/Entity';

export const fetchCategories = createAsyncThunk<
  {
    data: Category[];
    error: string | null;
    status: number;
  },
  {token: string}
>('categorySlice/fetchCategories', async ({token}) => {
  const URL = Config.API_URL + '/category';
  const METHOD = 'GET';
  const HEADERS = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await fetch(URL, {
      method: METHOD,
      headers: HEADERS,
    });

    const data = await response.json();

    return {
      data,
      error: null,
      status: response.status,
    };
  } catch (error) {
    throw new Error(`${error}`);
  }
});
