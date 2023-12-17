/* eslint-disable @typescript-eslint/no-unused-vars */
import {Platform} from 'react-native';
import {ProductInput} from '../Domain/Entity';
import RNFetchBlob from 'rn-fetch-blob';

const buildFetchBodyProduct = (
  product: ProductInput,
  fieldName: string,
  fileName: string,
  type?: string,
) => {
  const body = [];

  if (product.cover) {
    const filename = fileName;
    const coverPicture = {
      name: fieldName,
      filename,
      type: 'image/jpg',
      data: RNFetchBlob.wrap(
        Platform.OS === 'ios'
          ? product?.cover?.replace('file://', '')
          : product?.cover,
      ),
    };
    body.push(coverPicture);
  }

  body.push({
    name: 'product',
    data: JSON.stringify(product),
  });

  return body;
};

export {buildFetchBodyProduct};
