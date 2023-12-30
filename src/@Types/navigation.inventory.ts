import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomStackParamList} from './navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import {Product} from '../Domain/Entity';

export type HomeStackParamList = {
  [SCREEN_NAME.HOME_SCREEN]: undefined;
  [SCREEN_NAME.PRODUCT_DETAILS_SCREEN]: {item: Product};
};
export type InventoryStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.INVENTORY_STACK
>;

export type HomeScreenNavigationProps = NativeStackScreenProps<
  HomeStackParamList,
  SCREEN_NAME.HOME_SCREEN
>;
export type ProductDetailsScreenNavigationProps = NativeStackScreenProps<
  HomeStackParamList,
  SCREEN_NAME.PRODUCT_DETAILS_SCREEN
>;
