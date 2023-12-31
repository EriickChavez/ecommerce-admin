import {IMAGE_TYPE} from '../Enum/Image';
import IMAGES from '../Constants/IMAGES';
import ImageResizer from '@bam.tech/react-native-image-resizer';
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
const getBackgroundColor = async (
  source: string,
  callback?: (color: string) => void,
) => {
  try {
    const color = await getColorFromURL(source);
    callback && callback(color);
    return color;
  } catch (err) {
    throw new Error('Error al obtener el color');
  }
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

const resizeImage = async (
  sourceUri: string,
  targetWidth: number,
  targetHeight: number,
  compressFormat: 'JPEG' | 'PNG',
  quality: number,
) => {
  try {
    const resizedImageUri = await ImageResizer.createResizedImage(
      sourceUri,
      targetWidth,
      targetHeight,
      compressFormat,
      quality,
    );
    return resizedImageUri.uri;
  } catch (error) {
    console.error('Error al redimensionar la imagen:', error);
    return '';
  }
};

const RESIZE_IMAGE: {
  targetWidth: number;
  targetHeight: number;
  compressFormat: 'JPEG' | 'PNG';
  quality: number;
} = {
  targetWidth: 300,
  targetHeight: 200,
  compressFormat: 'PNG',
  quality: 100,
};

export {
  getDefaultImage,
  getBackgroundColor,
  fetchImageIos,
  resizeImage,
  RESIZE_IMAGE,
};
