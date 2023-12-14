import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../Enum/Screens';
import {BottomStackParamList} from './navigation';

export type SettingsStackNavigationProps = NativeStackScreenProps<
  BottomStackParamList,
  SCREEN_NAME.SETTINGS_STACK
>;
export type SettingsScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  SCREEN_NAME.SETTINGS_SCREEN
>;
export type SettingsStackParamList = {
  [SCREEN_NAME.SETTINGS_SCREEN]: undefined;
};
