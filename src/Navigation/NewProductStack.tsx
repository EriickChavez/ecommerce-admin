import React from 'react';
import {
  AddProductStackNavigatior,
  screenWithTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import AddProductScreen from '../Presentation/Screen/NewProduct/AddProductScreen';
import ConfirmDetails from '../Presentation/Screen/ConfirmDetails/ConfirmDetails';
import Confirmation from '../Presentation/Screen/Confirmation/Confirmation';
import {NewProductStackNavigationProps} from '../@Types/navigation.newProduct';
import IconHelpScreen from '../Presentation/Screen/IconHelp/IconHelpScreen';
import NewCategory from '../Presentation/Screen/NewCategory/NewCategory';
import NewBannerScreen from '../Presentation/Screen/NewBanner/NewBannerScreen';
import SelectNewItem from '../Presentation/Screen/SelectNew/SelectNewItem';

const NewProductStack: React.FC<NewProductStackNavigationProps> = () => {
  return (
    <AddProductStackNavigatior.Navigator
      screenOptions={screenWithTopbarOptions}
      initialRouteName={SCREEN_NAME.SELECT_ITEM_SCREEN}>
      <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.SELECT_ITEM_SCREEN}
        component={SelectNewItem}
      />
      <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.ADD_PRODUCT_SCREEN}
        component={AddProductScreen}
      />
      <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.NEW_CATEGORY_SCREEN}
        component={NewCategory}
      />
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
      <AddProductStackNavigatior.Screen
        options={screenWithTopbarOptions}
        name={SCREEN_NAME.NEW_BANNER_SCREEN}
        component={NewBannerScreen}
      />
      <AddProductStackNavigatior.Group
        screenOptions={{
          presentation: 'modal',
        }}>
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
