import {Theme} from '@react-navigation/native';
import {SCREEN_NAME} from '../Enum/Screens';

export interface navigationProps {
  theme: Theme;
}
export type BottomStackParamList = {
  [SCREEN_NAME.INVENTORY_STACK]: undefined;
  [SCREEN_NAME.NEW_PRODUCT_STACK]: undefined;
  [SCREEN_NAME.SETTINGS_STACK]: undefined;
};
