import React from 'react';
import {
  HomeStackNavigatior,
  screenWithoutTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import HomeScreen from '../Presentation/Screen/Home/HomeScreen';
import {InventoryStackNavigationProps} from '../@Types/navigation.inventory';
import ProductDetailsScreen from '../Presentation/Screen/ProductDetails/ProductDetailsScreen';

const InventoryStack: React.FC<InventoryStackNavigationProps> = () => {
  return (
    <HomeStackNavigatior.Navigator initialRouteName={SCREEN_NAME.HOME_SCREEN}>
      <HomeStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.HOME_SCREEN}
        component={HomeScreen}
      />
      <HomeStackNavigatior.Screen
        options={screenWithoutTopbarOptions}
        name={SCREEN_NAME.PRODUCT_DETAILS_SCREEN}
        component={ProductDetailsScreen}
      />
    </HomeStackNavigatior.Navigator>
  );
};

export default InventoryStack;
