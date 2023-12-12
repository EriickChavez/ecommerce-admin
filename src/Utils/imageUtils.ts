import {IMAGE_TYPE} from '../Enum/Image';
import IMAGES from '../Constants/IMAGES';

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

export {getDefaultImage};
