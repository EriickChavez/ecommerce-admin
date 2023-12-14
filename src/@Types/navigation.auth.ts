import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../Enum/Screens';

export type AuthStackParamList = {
  [SCREEN_NAME.LOGIN_SCREEN]: undefined;
  [SCREEN_NAME.SIGNUP_SCREEN]: undefined;
};
export type AuthStackNavigationProps = NativeStackScreenProps<
  AuthStackParamList,
  SCREEN_NAME.AUTH_STACK
>;

export type LoginNavigationProps = NativeStackScreenProps<
  AuthStackParamList,
  SCREEN_NAME.LOGIN_SCREEN
>;
export type SignupNavigationProps = NativeStackScreenProps<
  AuthStackParamList,
  SCREEN_NAME.SIGNUP_SCREEN
>;
