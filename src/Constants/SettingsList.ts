import {SCREEN_NAME} from '../Enum';
import UserSlice from '../Infrastructure/Store/Slice/UserSlice';
import LocalizationService from '../Utils/LocalizationService';

const SettingsButtonList = [
  {
    name: LocalizationService.settings.Profile,
    leftIcon: 'Profile',
    rightIcon: null,
    onPress: (navigation: {navigate: (arg0: SCREEN_NAME) => void}) => {
      navigation.navigate(SCREEN_NAME.PROFILE_SCREEN);
    },
  },
  {
    name: LocalizationService.settings.Categories,
    leftIcon: 'Category',
    rightIcon: null,
    onPress: (navigation: {navigate: (arg0: SCREEN_NAME) => void}) => {
      navigation.navigate(SCREEN_NAME.CATEGORY_STOCK_SCREEN);
    },
  },
  {
    name: LocalizationService.settings.Products,
    leftIcon: 'Category',
    rightIcon: null,
    onPress: (navigation: {navigate: (arg0: SCREEN_NAME) => void}) => {
      navigation.navigate(SCREEN_NAME.PRODUCT_STOCK_SCREEN);
    },
  },
  {
    name: LocalizationService.settings.Banner,
    leftIcon: 'AddCircle',
    rightIcon: null,
    onPress: (_navigation: {navigate: (arg0: SCREEN_NAME) => void}) => {
      // navigation.navigate(SCREEN_NAME.NEW_BANNER_SCREEN);
    },
  },
  {
    name: LocalizationService.settings.Logout,
    leftIcon: 'Logout',
    rightIcon: null,
    onPress: (dispatch: any) => {
      dispatch(UserSlice.actions.resetState());
    },
  },
];

export {SettingsButtonList};
