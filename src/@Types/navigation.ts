import {Theme} from '@react-navigation/native';
import {SCREEN_NAME} from '../Enum/Screens';

export interface navigationProps {
  theme: Theme;
}

export type RootStackParamList = {
  [SCREEN_NAME.HOME_SCREEN]: undefined;
};
