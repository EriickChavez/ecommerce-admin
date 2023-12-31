import React from 'react';
import {
  SettingsStackNavigatior,
  screenWithTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import {SettingsStackNavigationProps} from '../@Types/navigation.settings';
import SettingsScreen from '../Presentation/Screen/Settings/SettingsScreen';
import Confirmation from '../Presentation/Screen/Confirmation/Confirmation';
import CategoryStock from '../Presentation/Screen/Stock/CategoryStock';
import ProductStock from '../Presentation/Screen/Stock/ProductStock';
import ProfileScreen from '../Presentation/Screen/Profile/ProfileScreen';
import EditProfile from '../Presentation/Screen/EditProfile/EditProfile';
import LocalizationService from '../Utils/LocalizationService';

const SettingsStack: React.FC<SettingsStackNavigationProps> = () => {
  return (
    <SettingsStackNavigatior.Navigator
      initialRouteName={SCREEN_NAME.SETTINGS_SCREEN}>
      <SettingsStackNavigatior.Screen
        options={{
          ...screenWithTopbarOptions,
          title: LocalizationService.titleScreen.SETTINGS_SCREEN,
        }}
        name={SCREEN_NAME.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
      <SettingsStackNavigatior.Screen
        component={CategoryStock}
        name={SCREEN_NAME.CATEGORY_STOCK_SCREEN}
        options={{
          ...screenWithTopbarOptions,
          title: LocalizationService.titleScreen.CATEGORY_STOCK_SCREEN,
        }}
      />
      <SettingsStackNavigatior.Screen
        name={SCREEN_NAME.PRODUCT_STOCK_SCREEN}
        component={ProductStock}
        options={{
          ...screenWithTopbarOptions,
          title: LocalizationService.titleScreen.PRODUCT_STOCK_SCREEN,
        }}
      />
      <SettingsStackNavigatior.Screen
        name={SCREEN_NAME.CONFIRMATION_SCREEN}
        component={Confirmation}
        options={{
          ...screenWithTopbarOptions,
          title: LocalizationService.titleScreen.CONFIRMATION_SCREEN,
        }}
      />
      <SettingsStackNavigatior.Screen
        name={SCREEN_NAME.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          ...screenWithTopbarOptions,
          title: LocalizationService.titleScreen.PROFILE_SCREEN,
        }}
      />
      <SettingsStackNavigatior.Screen
        name={SCREEN_NAME.EDIT_PROFILE_SCREEN}
        component={EditProfile}
        options={{
          ...screenWithTopbarOptions,
          title: LocalizationService.titleScreen.EDIT_PROFILE_SCREEN,
        }}
      />
    </SettingsStackNavigatior.Navigator>
  );
};

export default SettingsStack;
