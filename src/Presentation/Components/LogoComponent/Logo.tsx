import LogoIcon from '../../../Assets/svg/Logo';
import {SvgProps} from 'react-native-svg';
import React from 'react';

const Logo: React.FC<SvgProps> = props => {
  return <LogoIcon {...props} />;
};

export default Logo;
