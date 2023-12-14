import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomStackParamList} from './navigation';
import {SCREEN_NAME} from '../Enum/Screens';

export type HomeStackParamList = {
  [SCREEN_NAME.HOME_SCREEN]: undefined;
};
export type InventoryStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.INVENTORY_STACK
>;

export type HomeScreenNavigationProps = NativeStackScreenProps<
  HomeStackParamList,
  SCREEN_NAME.HOME_SCREEN
>;
