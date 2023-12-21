import React from 'react';
import {
  AddProductStackNavigatior,
  screenWithTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import AddProductScreen from '../Presentation/Screen/NewProduct/AddProductScreen';
// import AddProductPt2Screen from '../Presentation/Screen/NewProduct/AddProductPt2Screen';
import ConfirmDetails from '../Presentation/Screen/ConfirmDetails/ConfirmDetails';
import Confirmation from '../Presentation/Screen/Confirmation/Confirmation';
import {NewProductStackNavigationProps} from '../@Types/navigation.newProduct';
import IconHelpScreen from '../Presentation/Screen/IconHelp/IconHelpScreen';

const NewProductStack: React.FC<NewProductStackNavigationProps> = () => {
  return (
    <AddProductStackNavigatior.Navigator
      screenOptions={screenWithTopbarOptions}
      initialRouteName={SCREEN_NAME.ADD_PRODUCT_SCREEN}>
      <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.ADD_PRODUCT_SCREEN}
        component={AddProductScreen}
      />
      {/* <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2}
        component={AddProductPt2Screen}
      /> */}
      <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.CONFIRM_DETAILS_SCREEN}
        component={ConfirmDetails}
      />
      <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.CONFIRMATION_SCREEN}
        component={Confirmation}
      />

      <AddProductStackNavigatior.Group>
        <AddProductStackNavigatior.Screen
          options={screenWithTopbarOptions}
          name={SCREEN_NAME.ICON_HELP_SCREEN}
          component={IconHelpScreen}
        />
      </AddProductStackNavigatior.Group>
    </AddProductStackNavigatior.Navigator>
  );
};

export default NewProductStack;
