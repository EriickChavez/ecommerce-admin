import React, {useEffect, useMemo, useState} from 'react';
import BottomNavigation from './BottomNavigation';
import AuthStack from './AuthStack';
import {Theme} from '@react-navigation/native';
import themes from '../Themes/themes';
import {useSelector} from 'react-redux';
import {userSelector} from '../Infrastructure/Store/Slice/UserSlice';
import SplashScreen from '../Presentation/Screen/Splash/SplashScreen';

interface NavigationProps {
  theme: Theme;
}

const Navigation: React.FC<NavigationProps> = ({theme = themes.light}) => {
  const userState = useSelector(userSelector);
  const isLogged = useMemo(() => userState.user.token, [userState.user.token]);
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000); // Cambia este valor al tiempo que deseas mostrar el splash
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  } else if (!isLogged) {
    return <BottomNavigation theme={theme} />;
  } else {
    return <AuthStack theme={theme} />;
  }
};

export default Navigation;
