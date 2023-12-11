import React from 'react';
import {
  HomeStackNavigatior,
  screenWithTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import HomeScreen from '../Presentation/Screen/Home/HomeScreen';
import {InventoryStackNavigationProps} from '../@Types/navigation';

const InventoryStack: React.FC<InventoryStackNavigationProps> = () => {
  return (
    <HomeStackNavigatior.Navigator initialRouteName={SCREEN_NAME.HOME_SCREEN}>
      <HomeStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.HOME_SCREEN}
        component={HomeScreen}
      />
    </HomeStackNavigatior.Navigator>
  );
};

export default InventoryStack;
