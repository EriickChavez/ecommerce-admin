import {SCREEN_NAME} from '../../../Enum/Screens';

export interface Banner {
  id: string;
  title: string;
  description: string;
  album: string[];
  type: SCREEN_NAME;
}
