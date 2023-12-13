import React from 'react';
import BottomNavigation from './BottomNavigation';
import AuthStack from './AuthStack';
import {Theme} from '@react-navigation/native';
import themes from '../Themes/themes';

interface NavigationProps {
  theme: Theme;
}

const Navigation: React.FC<NavigationProps> = ({theme = themes.light}) => {
  const isLogged = true;
  if (isLogged) {
    return <BottomNavigation theme={theme} />;
  } else {
    return <AuthStack theme={theme} />;
  }
};

export default Navigation;
