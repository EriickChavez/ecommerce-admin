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
};

export type BottomStackParamList = {
  [SCREEN_NAME.INVENTORY_STACK]: undefined;
  [SCREEN_NAME.NEW_PRODUCT_STACK]: undefined;
};
// SCREEN
export type HomeScreenNavigationProps = NativeStackScreenProps<
  HomeStackParamList,
  SCREEN_NAME.HOME_SCREEN
>;
export type AddProductNavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.ADD_PRODUCT_SCREEN
>;
export type AddProductPt2NavigationProps = NativeStackScreenProps<
  NewProductStackParamList,
  SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2
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
