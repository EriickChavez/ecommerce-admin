import React, {useEffect, useState} from 'react';
import {Appearance, useColorScheme} from 'react-native';
import themes from './Themes/themes';
import {Theme} from '@react-navigation/native';
import Navigation from './Navigation';

const AppContainer: React.FC = () => {
  const systemColorScheme = useColorScheme();

  const [appTheme, setAppTheme] = useState<Theme>(
    systemColorScheme === 'dark' ? themes.dark : themes.light,
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setAppTheme(colorScheme === 'dark' ? themes.dark : themes.light);
    });

    return () => subscription.remove();
  }, []);
  return <Navigation theme={appTheme} />;
};

export default AppContainer;
