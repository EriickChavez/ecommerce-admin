import {IMAGE_TYPE} from '../Enum/Image';
import IMAGES from '../Constants/IMAGES';
import {getColorFromURL} from 'rn-dominant-color';

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
      callback(colors.background);
    })
    .catch(err => {
      console.log({err});
    });
};
export {getDefaultImage, getBackgroundColor};
