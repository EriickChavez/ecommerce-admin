import React from 'react';
import {
  SettingsStackNavigatior,
  screenWithoutTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import {SettingsStackNavigationProps} from '../@Types/navigation.settings';
import SettingsScreen from '../Presentation/Screen/Settings/SettingsScreen';
import NewCategory from '../Presentation/Screen/NewCategory/NewCategory';

const SettingsStack: React.FC<SettingsStackNavigationProps> = () => {
  return (
    <SettingsStackNavigatior.Navigator
      initialRouteName={SCREEN_NAME.SETTINGS_SCREEN}>
      <SettingsStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
      <SettingsStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.NEW_CATEGORY_SCREEN}
        component={NewCategory}
      />
    </SettingsStackNavigatior.Navigator>
  );
};

export default SettingsStack;
