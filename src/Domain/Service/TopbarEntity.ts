import {LOGO_POSITION, LOGO_TYPE} from '../../Enum/Topbar';

export interface TopbarService {
  logoPosition: LOGO_POSITION;
  logoType: LOGO_TYPE;
  topbarTitle: string;
}

export interface topbarSliceState {
  logoPosition: LOGO_POSITION;
  logoType: LOGO_TYPE;
  topbarTitle: string;
}
