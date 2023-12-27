import React from 'react';
import {
  SettingsStackNavigatior,
  screenWithoutTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import {SettingsStackNavigationProps} from '../@Types/navigation.settings';
import SettingsScreen from '../Presentation/Screen/Settings/SettingsScreen';
import Confirmation from '../Presentation/Screen/Confirmation/Confirmation';
import CategoryStock from '../Presentation/Screen/Stock/CategoryStock';
import ProductStock from '../Presentation/Screen/Stock/ProductStock';
import ProfileScreen from '../Presentation/Screen/Profile/ProfileScreen';
import EditProfile from '../Presentation/Screen/EditProfile/EditProfile';

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
        name={SCREEN_NAME.CATEGORY_STOCK_SCREEN}
        component={CategoryStock}
      />
      <SettingsStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.PRODUCT_STOCK_SCREEN}
        component={ProductStock}
      />
      <SettingsStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.CONFIRMATION_SCREEN}
        component={Confirmation}
      />
      <SettingsStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <SettingsStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.EDIT_PROFILE_SCREEN}
        component={EditProfile}
      />
    </SettingsStackNavigatior.Navigator>
  );
};

export default SettingsStack;
