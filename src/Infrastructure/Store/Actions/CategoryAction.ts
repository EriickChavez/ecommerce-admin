import {createAsyncThunk} from '@reduxjs/toolkit';
import {Config} from '../../../Config/ENV';
import {Category, CategoryInput} from '../../../Domain/Entity';

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

export const fetchAddCategory = createAsyncThunk<
  {
    data: Category;
    error: string | null;
    status: number;
  },
  {token: string; category: CategoryInput}
>(
  'categorySlice/fetchAddCategory',
  async ({
    token,
    category,
  }): Promise<{
    data: Category;
    error: string | null;
    status: number;
  }> => {
    const URL = Config.API_ADMIN_URL + '/category/add';
    const METHOD = 'POST';
    const HEADERS = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(URL, {
        method: METHOD,
        headers: HEADERS,
        body: JSON.stringify({category}),
      });

      const data = await response.json();

      return {
        data,
        error: null,
        status: response.status,
      };
    } catch (error) {
      console.error(error);
      throw new Error(`${error}`);
    }
  },
);
