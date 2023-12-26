import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomStackParamList} from './navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import {SettingsStackParamList} from './navigation.settings';
import {ITEMS} from '../Enum';

export type NewProductStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.NEW_PRODUCT_STACK
>;

export type SelectItemNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.SELECT_ITEM_SCREEN
>;

export type AddProductNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.ADD_PRODUCT_SCREEN
>;

export type IconHelpNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.ICON_HELP_SCREEN
>;
export type ConfirmDetailsNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.CONFIRM_DETAILS_SCREEN
>;

export type NewCategoryScreenNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.NEW_CATEGORY_SCREEN
>;
export type NewBannerScreenNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.NEW_BANNER_SCREEN
>;
export type ConfirmNavigationProps = NativeStackScreenProps<
  NewProductStackParamList & SettingsStackParamList,
  SCREEN_NAME.CONFIRMATION_SCREEN
>;

export type NewProductStackParamList = {
  [SCREEN_NAME.SELECT_ITEM_SCREEN]: undefined;
  [SCREEN_NAME.ADD_PRODUCT_SCREEN]: undefined;
  [SCREEN_NAME.CONFIRM_DETAILS_SCREEN]: undefined;
  [SCREEN_NAME.CONFIRMATION_SCREEN]: {item: ITEMS};
  [SCREEN_NAME.ICON_HELP_SCREEN]: undefined;
  [SCREEN_NAME.NEW_CATEGORY_SCREEN]: undefined;
  [SCREEN_NAME.NEW_BANNER_SCREEN]: undefined;
};
