import {Theme} from '@react-navigation/native';
import {SCREEN_NAME} from '../Enum/Screens';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface navigationProps {
  theme: Theme;
}

export type HomeStackParamList = {
  [SCREEN_NAME.HOME_SCREEN]: undefined;
};

export type BottomStackParamList = {
  [SCREEN_NAME.INVENTORY_STACK]: undefined;
  [SCREEN_NAME.NEW_PRODUCT_STACK]: undefined;
};

export type HomeScreenNavigationProps = NativeStackScreenProps<
  HomeStackParamList,
  SCREEN_NAME.HOME_SCREEN
>;

// STACK
export type InventoryStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.INVENTORY_STACK
>;
