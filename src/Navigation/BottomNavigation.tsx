import React from 'react';
import {navigationProps} from '../@Types/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import InventoryStack from './InventoryStack';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab, bottomBarWithoutTopbarOptions} from '../Config/navigation';
import {AddCircle, Category} from 'iconsax-react-native';
import NewProductStack from './NewProductStack';
import Topbar from '../Presentation/Components/Topbar/Topbar';
import SettingsStack from './SettingsStack';

const BottomNavigation: React.FC<navigationProps> = ({theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name={SCREEN_NAME.INVENTORY_STACK}
          component={InventoryStack}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Category size={size} color={color} variant="Bold" />;
            },
            header: Topbar,
          }}
        />
        <BottomTab.Screen
          name={SCREEN_NAME.NEW_PRODUCT_STACK}
          component={NewProductStack}
          options={{
            ...bottomBarWithoutTopbarOptions,
            tabBarIcon: ({color, size}) => {
              return <AddCircle size={size} color={color} variant="Bold" />;
            },
          }}
        />
        <BottomTab.Screen
          name={SCREEN_NAME.SETTINGS_STACK}
          component={SettingsStack}
          options={{
            tabBarIcon: ({color, size}) => {
              return <AddCircle size={size} color={color} variant="Bold" />;
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
export default BottomNavigation;
