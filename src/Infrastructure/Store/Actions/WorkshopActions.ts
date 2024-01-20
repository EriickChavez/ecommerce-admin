import {createAsyncThunk} from '@reduxjs/toolkit';
import {Workshop, InputWorkshop} from '../../../Domain/Workshop/Workshop';
import {Config} from '../../../Config/ENV';
import RNFetchBlob from 'rn-fetch-blob';
import {RESIZE_IMAGE, resizeImage} from '../../../Utils/imageUtils';

export const createWorkshopAction = createAsyncThunk<
  {
    data: Workshop;
    error: string | null;
    status: number;
  },
  {workshop: InputWorkshop; token: string; userId: string}
>(
  'workshopSlice/fetchCreateWorkshop',
  async ({
    userId,
    workshop,
    token,
  }): Promise<{data: Workshop; error: string | null; status: number}> => {
    const URL: string = Config.API_ADMIN_URL + '/workshop/add';
    const METHOD = 'POST';
    const HEADERS = {
      'Content-Type': 'application/json',
      authentication: `Bearer ${token}`,
    };

    try {
      const response = await fetch(URL, {
        method: METHOD,
        headers: HEADERS,
        body: JSON.stringify({
          name: workshop.name,
          description: workshop.description,
          imageUri: '',
          adminId: workshop.adminId,
        }),
      });

      const res = await response.json();
      let thumbnailResponse = null;
      if (response.status === 200) {
        const newWorkShop = {
          id: res.id,
          name: workshop.name,
          description: workshop.description,
          imageUri: workshop.imageUri,
          createdAt: res.createdAt,
          adminId: res.adminId,
        };

        const thumbnailRes = await fetchThumblnail(
          userId,
          newWorkShop,
          workshop.imageUri,
          token,
        );

        thumbnailResponse = await thumbnailRes.json();
      }

      return {
        data: thumbnailResponse,
        error: null,
        status: 200,
      };
    } catch (err) {
      throw new Error('Error');
    }
  },
);
const fetchThumblnail = async (
  userId: string,
  workshop: Workshop,
  imageUri: string,
  token: string,
) => {
  const URL: string = Config.API_ADMIN_URL + '/workshop/add-image';
  const METHOD = 'POST';
  const HEADERS = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  };

  const filename =
    userId + ',' + workshop.id + ',workshop' + ',' + workshop.name + ',jpg';

  const newUri = await resizeImage(
    imageUri,
    RESIZE_IMAGE.targetWidth,
    RESIZE_IMAGE.targetHeight,
    RESIZE_IMAGE.compressFormat,
    RESIZE_IMAGE.quality,
  );
  const BODY = [
    {
      name: 'workshop',
      filename: filename,
      type: 'image/png',
      data: RNFetchBlob.wrap(newUri.replace('file://', '')),
    },
  ];

  const response = await RNFetchBlob.fetch(METHOD, URL, HEADERS, BODY);
  return response;
};

export const fetchWorkshopAction = createAsyncThunk<
  {
    data: Workshop;
    error: string | null;
    status: number;
  },
  {token: string; userId: string}
>('workshopSlice/fetchWorkshop', async ({token, userId}) => {
  try {
    const URL: string = Config.API_ADMIN_URL + '/workshop/byUserId';
    const METHOD = 'POST';
    const HEADERS = {
      'Content-Type': 'application/json',
      authentication: `Bearer ${token}`,
    };
    const response = await fetch(URL, {
      method: METHOD,
      headers: HEADERS,
      body: JSON.stringify({
        userId,
      }),
    });
    const res = await response.json();
    return {
      data: res,
      error: null,
      status: 200,
    };
  } catch (err) {}
  return {
    data: null,
    error: null,
    status: 200,
  };
});
