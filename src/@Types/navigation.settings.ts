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
export type NewCategoryScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  SCREEN_NAME.NEW_CATEGORY_SCREEN
>;
export type NewBannerScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  SCREEN_NAME.NEW_BANNER_SCREEN
>;
export type SettingsStackParamList = {
  [SCREEN_NAME.SETTINGS_SCREEN]: undefined;
  [SCREEN_NAME.NEW_CATEGORY_SCREEN]: undefined;
  [SCREEN_NAME.NEW_BANNER_SCREEN]: undefined;
  [SCREEN_NAME.CONFIRMATION_SCREEN]: {item: ITEMS};
};
