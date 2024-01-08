import React from 'react';
import {
  HomeStackNavigatior,
  screenWithoutTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import HomeScreen from '../Presentation/Screen/Home/HomeScreen';
import {InventoryStackNavigationProps} from '../@Types/navigation.inventory';
import ProductDetailsScreen from '../Presentation/Screen/ProductDetails/ProductDetailsScreen';
import LocalizationService from '../Utils/LocalizationService';

const InventoryStack: React.FC<InventoryStackNavigationProps> = () => {
  return (
    <HomeStackNavigatior.Navigator initialRouteName={SCREEN_NAME.HOME_SCREEN}>
      <HomeStackNavigatior.Screen
        options={{
          ...screenWithoutTopbarOptions,
          title: LocalizationService.titleScreen.HOME_SCREEN,
        }}
        name={SCREEN_NAME.HOME_SCREEN}
        component={HomeScreen}
      />
      <HomeStackNavigatior.Group screenOptions={{presentation: 'formSheet'}}>
        <HomeStackNavigatior.Screen
          options={{
            ...screenWithoutTopbarOptions,
            title: LocalizationService.titleScreen.PRODUCT_DETAILS_SCREEN,
          }}
          name={SCREEN_NAME.PRODUCT_DETAILS_SCREEN}
          component={ProductDetailsScreen}
        />
      </HomeStackNavigatior.Group>
    </HomeStackNavigatior.Navigator>
  );
};

export default InventoryStack;
