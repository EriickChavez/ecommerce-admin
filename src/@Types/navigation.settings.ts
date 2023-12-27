import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../Enum/Screens';
import {BottomStackParamList} from './navigation';
import {ITEMS} from '../Enum';

export type SettingsStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.SETTINGS_STACK
>;
export type SettingsScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  SCREEN_NAME.SETTINGS_SCREEN
>;
export type CategoryStockScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  SCREEN_NAME.CATEGORY_STOCK_SCREEN
>;
export type ProductStockScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  SCREEN_NAME.PRODUCT_STOCK_SCREEN
>;
export type ProfileScreenScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  SCREEN_NAME.PROFILE_SCREEN
>;
export type EditProfileScreenScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  SCREEN_NAME.EDIT_PROFILE_SCREEN
>;
export type SettingsStackParamList = {
  [SCREEN_NAME.SETTINGS_SCREEN]: undefined;
  [SCREEN_NAME.PRODUCT_STOCK_SCREEN]: undefined;
  [SCREEN_NAME.EDIT_PROFILE_SCREEN]: undefined;
  [SCREEN_NAME.PROFILE_SCREEN]: undefined;
  [SCREEN_NAME.CATEGORY_STOCK_SCREEN]: undefined;
  [SCREEN_NAME.CONFIRMATION_SCREEN]: {item: ITEMS};
};
