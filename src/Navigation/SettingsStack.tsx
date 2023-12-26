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
    </SettingsStackNavigatior.Navigator>
  );
};

export default SettingsStack;
