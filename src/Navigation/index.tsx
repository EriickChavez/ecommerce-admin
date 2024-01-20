import React, {useEffect, useMemo, useState} from 'react';
import BottomNavigation from './BottomNavigation';
import AuthStack from './AuthStack';
import themes from '../Themes/themes';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../Infrastructure/Store/Slice/UserSlice';
import SplashScreen from '../Presentation/Screen/Splash/SplashScreen';
import {ThemeEntry} from '../@Types/theme';
import {workshopSelector} from '../Infrastructure/Store/Slice/WorkshopSlice';
import Workshop from '../Presentation/Screen/Workshop/Workshop';
import {fetchWorkshopAction} from '../Infrastructure/Store/Actions/WorkshopActions';

interface NavigationProps {
  theme: ThemeEntry;
}

const Navigation: React.FC<NavigationProps> = ({theme = themes.light}) => {
  const userState = useSelector(userSelector);
  const workshopState = useSelector(workshopSelector);
  const dispatch = useDispatch();
  const isLogged = useMemo(() => userState.user.token, [userState.user.token]);

  const hasWorkshops = useMemo(
    () => workshopState.workshop?.id,
    [workshopState.workshop?.id],
  );
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    dispatch(
      fetchWorkshopAction({
        token: userState.user.token,
        userId: userState.user.id,
      }),
    );
  }, [dispatch, userState.user.id, userState.user.token]);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  } else if (!isLogged) {
    return <AuthStack theme={theme} />;
  } else if (!hasWorkshops) {
    return <Workshop theme={theme} />;
  } else {
    return <BottomNavigation theme={theme} />;
  }
};

export default Navigation;
