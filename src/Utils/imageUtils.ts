import {IMAGE_TYPE} from '../Enum/Image';
import IMAGES from '../Constants/IMAGES';
// @ts-ignore
import {getColorFromURL} from 'rn-dominant-color';
import RNFetchBlob from 'rn-fetch-blob';
import {Platform} from 'react-native';

export interface bgColor {
  background: string;
  detail: string;
  primary: string;
  secondary: string;
}
const getDefaultImage = (type: IMAGE_TYPE) => {
  switch (type) {
    case IMAGE_TYPE.AVATAR:
      return IMAGES.AVATAR;
    case IMAGE_TYPE.PRODUCT:
      return IMAGES.PRODUCT;
    default:
      return IMAGES.AVATAR;
  }
};
const getBackgroundColor = (
  source: string,
  callback?: (color: string) => void,
) => {
  getColorFromURL(source)
    .then((colors: bgColor) => {
      callback && callback(colors.background);
    })
    .catch((err: Error) => {
      console.log({err});
    });
};

const fetchImageIos = async (url: string, filename: string, uri: string) => {
  // image.assets[0].fileName
  RNFetchBlob.fetch(
    'POST',
    url,
    {
      'Content-Type': 'multipart/form-data',
    },
    [
      {
        name: 'picture', // Nombre del campo en el servidor
        filename,
        type: 'image/jpg',
        data: RNFetchBlob.wrap(
          Platform.OS === 'ios' ? uri.replace('file://', '') : uri,
        ),
      },
      {
        name: 'additionalData',
        data: 'someValue',
      },
    ],
  );
};
export {getDefaultImage, getBackgroundColor, fetchImageIos};
