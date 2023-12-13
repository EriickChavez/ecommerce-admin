import React, {useMemo} from 'react';
import BottomNavigation from './BottomNavigation';
import AuthStack from './AuthStack';
import {Theme} from '@react-navigation/native';
import themes from '../Themes/themes';
import {useSelector} from 'react-redux';
import {userSelector} from '../Infrastructure/Store/Slice/userSlice';

interface NavigationProps {
  theme: Theme;
}

const Navigation: React.FC<NavigationProps> = ({theme = themes.light}) => {
  const userState = useSelector(userSelector);
  const isLogged = useMemo(() => userState.user.token, [userState.user.token]);

  if (isLogged) {
    return <BottomNavigation theme={theme} />;
  } else {
    return <AuthStack theme={theme} />;
  }
};

export default Navigation;
