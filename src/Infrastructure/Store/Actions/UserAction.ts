import {createAsyncThunk} from '@reduxjs/toolkit';
import {Config} from '../../../Config/ENV';
import {UserView} from '../../../Domain/Entity/User/User';

export const fetchSignup = createAsyncThunk<
  {
    data: UserView;
    error: string | null;
    status: number;
  },
  {
    email: string;
    password: string;
    username: string;
  }
>(
  'userSlice/fetchSignup',
  async ({
    email,
    password,
    username,
  }): Promise<{data: UserView; error: string | null; status: number}> => {
    try {
      const url = `${Config.API_ADMIN_URL}/auth/signup`;
      const method = 'POST';
      const headers = {
        'Content-Type': 'application/json',
      };

      const body = {
        email,
        password,
        username,
      };

      const options = {
        headers,
        method,
        body: JSON.stringify(body),
      };

      const response = await fetch(url, options);
      const data = await response.json();
      return {
        data,
        error: null,
        status: response.status,
      };
    } catch (error) {
      console.error('Error en fetchMe: ->', error);
      throw new Error(`${error}`);
    }
  },
);
export const fetchLogin = createAsyncThunk<
  {
    data: UserView;
    error: string | null;
    status: number;
  },
  {
    email: string;
    password: string;
  }
>(
  'userSlice/fetchLogin',
  async ({
    email,
    password,
  }): Promise<{data: UserView; error: string | null; status: number}> => {
    try {
      const url = `${Config.API_ADMIN_URL}/auth/login`;
      const method = 'POST';
      const headers = {
        'Content-Type': 'application/json',
      };

      const body = {
        email,
        password,
      };
      const options = {
        headers,
        method,
        body: JSON.stringify(body),
      };

      const response = await fetch(url, options);
      const data = await response.json();
      return {
        data,
        error: null,
        status: response.status,
      };
    } catch (error) {
      console.error('Error en fetchMe: ->', error);
      throw new Error(`${error}`);
    }
  },
);
