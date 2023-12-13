import {Theme} from '@react-navigation/native';
import {SCREEN_NAME} from '../Enum/Screens';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface navigationProps {
  theme: Theme;
}

export type HomeStackParamList = {
  [SCREEN_NAME.HOME_SCREEN]: undefined;
};
export type NewProductStackParamList = {
  [SCREEN_NAME.ADD_PRODUCT_SCREEN]: undefined;
  [SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2]: undefined;
  [SCREEN_NAME.CONFIRM_DETAILS_SCREEN]: undefined;
  [SCREEN_NAME.CONFIRMATION_SCREEN]: undefined;
};
export type SettingsStackParamList = {
  [SCREEN_NAME.SETTINGS_SCREEN]: undefined;
};

export type AuthStackParamList = {
  [SCREEN_NAME.LOGIN_SCREEN]: undefined;
  [SCREEN_NAME.SIGNUP_SCREEN]: undefined;
};
export type BottomStackParamList = {
  [SCREEN_NAME.INVENTORY_STACK]: undefined;
  [SCREEN_NAME.NEW_PRODUCT_STACK]: undefined;
  [SCREEN_NAME.SETTINGS_STACK]: undefined;
};
// INVENTORY STACK
export type HomeScreenNavigationProps = NativeStackScreenProps<
  HomeStackParamList,
  SCREEN_NAME.HOME_SCREEN
>;
// NEW PRODUCT STACK
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
export type ConfirmNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.CONFIRMATION_SCREEN
>;
// AUTH STACK
export type LoginNavigationProps = NativeStackScreenProps<
  AuthStackParamList,
  SCREEN_NAME.LOGIN_SCREEN
>;
export type SignupNavigationProps = NativeStackScreenProps<
  AuthStackParamList,
  SCREEN_NAME.SIGNUP_SCREEN
>;
// SETTINGS STACK
export type SettingsScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  SCREEN_NAME.SETTINGS_SCREEN
>;
// STACK
export type InventoryStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.INVENTORY_STACK
>;
export type NewProductStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.NEW_PRODUCT_STACK
>;
export type SettingsStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.SETTINGS_STACK
>;
export type AuthStackNavigationProps = NativeStackScreenProps<
  AuthStackParamList,
  SCREEN_NAME.AUTH_STACK
>;
