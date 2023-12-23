import React from 'react';
import {
  SettingsStackNavigatior,
  screenWithoutTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import {SettingsStackNavigationProps} from '../@Types/navigation.settings';
import SettingsScreen from '../Presentation/Screen/Settings/SettingsScreen';
import NewCategory from '../Presentation/Screen/NewCategory/NewCategory';
import Confirmation from '../Presentation/Screen/Confirmation/Confirmation';
import NewBannerScreen from '../Presentation/Screen/NewBanner/NewBannerScreen';

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
      <SettingsStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.NEW_BANNER_SCREEN}
        component={NewBannerScreen}
      />
      <SettingsStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.CONFIRMATION_SCREEN}
        component={Confirmation}
      />
    </SettingsStackNavigatior.Navigator>
  );
};

export default SettingsStack;
