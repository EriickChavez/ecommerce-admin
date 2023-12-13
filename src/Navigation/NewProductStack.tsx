import React from 'react';
import {
  AddProductStackNavigatior,
  screenWithTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import {NewProductStackNavigationProps} from '../@Types/navigation';
import AddProductScreen from '../Presentation/Screen/NewProduct/AddProductScreen';
import AddProductPt2Screen from '../Presentation/Screen/NewProduct/AddProductPt2Screen';

const NewProductStack: React.FC<NewProductStackNavigationProps> = () => {
  return (
    <AddProductStackNavigatior.Navigator
      initialRouteName={SCREEN_NAME.ADD_PRODUCT_SCREEN}>
      <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.ADD_PRODUCT_SCREEN}
        component={AddProductScreen}
      />
      <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2}
        component={AddProductPt2Screen}
      />
    </AddProductStackNavigatior.Navigator>
  );
};

export default NewProductStack;
