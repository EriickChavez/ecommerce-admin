import React from 'react';
import {navigationProps} from '../@Types/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import InventoryStack from './InventoryStack';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from '../Config/navigation';
import {Category} from 'iconsax-react-native';

const BottomNavigation: React.FC<navigationProps> = ({theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen
          name={SCREEN_NAME.INVENTORY_STACK}
          component={InventoryStack}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Category size={size} color={color} variant="Bold" />;
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
export default BottomNavigation;
