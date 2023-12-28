import {createAsyncThunk} from '@reduxjs/toolkit';
import {Config} from '../../../Config/ENV';
import {UserView, UserViewInput} from '../../../Domain/Entity/User/User';
import RNFetchBlob from 'rn-fetch-blob';
import {Platform} from 'react-native';
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
      throw error;
    }
  },
);
export const fetchEditUser = createAsyncThunk<
  {
    data: UserView;
    error: string | null;
    status: number;
  },
  {
    token: string;
    user: UserViewInput;
  }
>(
  'userSlice/fetchEditUser',
  async ({
    token,
    user,
  }): Promise<{
    data: UserView;
    error: string | null;
    status: number;
  }> => {
    try {
      console.info('Aqui si llego');
      console.info({user});
      return await buildFetchBodyProfile(user, token);
    } catch (error) {
      console.log('error en fetchEditUser', error);
      throw error;
    }
  },
);

const buildFetchBodyProfile = async (user: UserViewInput, token: string) => {
  const URL = `${Config.API_ADMIN_URL}/auth/editProfile`;
  const METHOD = 'POST';

  const filename =
    `{userId: "${user.id}", type: "profile" }.profile-` +
    user.username +
    '.jpg';

  let imageUri = null;
  if (user.imageUri !== '/public/imgsDefault.jpeg') {
    imageUri =
      Platform.OS === 'ios'
        ? user.imageUri?.replace('file://', '')
        : user.imageUri;
  }

  try {
    if (imageUri) {
      const HEADERS = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      };
      const response = await RNFetchBlob.fetch(METHOD, URL, HEADERS, [
        {
          name: 'profile',
          filename,
          type: 'image/jpg',
          data: RNFetchBlob.wrap(imageUri),
        },
      ]);

      const data = await response.json();

      return {
        data,
        error: null,
        status: 200,
      };
    } else {
      const response = await fetch(URL, {
        body: JSON.stringify(user),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: METHOD,
      });
      const data = await response.json();
      return {
        data,
        error: null,
        status: 200,
      };
    }
  } catch (err) {
    console.log('error en fetchEditUser', err);
    throw err;
  }
};
