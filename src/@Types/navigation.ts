import {SCREEN_NAME} from '../Enum/Screens';
import {ThemeEntry} from './theme';

export interface navigationProps {
  theme: ThemeEntry;
}
export type BottomStackParamList = {
  [SCREEN_NAME.INVENTORY_STACK]: undefined;
  [SCREEN_NAME.NEW_PRODUCT_STACK]: undefined;
  [SCREEN_NAME.SETTINGS_STACK]: undefined;
};
