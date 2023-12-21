import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomStackParamList} from './navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import {SettingsStackParamList} from './navigation.settings';
import {ITEMS} from '../Enum';

export type NewProductStackParamList = {
  [SCREEN_NAME.ADD_PRODUCT_SCREEN]: undefined;
  [SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2]: undefined;
  [SCREEN_NAME.CONFIRM_DETAILS_SCREEN]: undefined;
  [SCREEN_NAME.CONFIRMATION_SCREEN]: {item: ITEMS};
};

export type NewProductStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.NEW_PRODUCT_STACK
>;

export type AddProductNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.ADD_PRODUCT_SCREEN
>;
export type AddProductPt2NavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2
>;
export type ConfirmDetailsNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.CONFIRM_DETAILS_SCREEN
>;
// export type ConfirmNavigationProps = NativeStackScreenProps<
//   NewProductStackParamList | SettingsStackParamList,
//   SCREEN_NAME.CONFIRMATION_SCREEN
// >;

export type ConfirmNavigationProps = NativeStackScreenProps<
  NewProductStackParamList & SettingsStackParamList,
  SCREEN_NAME.CONFIRMATION_SCREEN
>;
