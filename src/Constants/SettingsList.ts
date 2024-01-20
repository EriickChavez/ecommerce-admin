import {SCREEN_NAME} from '../Enum';
import CategorySlice from '../Infrastructure/Store/Slice/CategorySlice';
import ProductSlice from '../Infrastructure/Store/Slice/ProductSlice';
import UserSlice from '../Infrastructure/Store/Slice/UserSlice';
import WorkshopSlice from '../Infrastructure/Store/Slice/WorkshopSlice';
import LocalizationService from '../Utils/LocalizationService';

const SettingsButtonList = [
  {
    name: LocalizationService.settings.Workspace,
    leftIcon: 'Shop',
    rightIcon: null,
    onPress: (_navigation: {navigate: (arg0: SCREEN_NAME) => void}) => {},
  },
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
      dispatch(CategorySlice.actions.resetState());
      dispatch(ProductSlice.actions.resetState());
      dispatch(WorkshopSlice.actions.resetState());
    },
  },
];

export {SettingsButtonList};
