import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  BottomStackParamList,
  HomeStackParamList,
  NewProductStackParamList,
} from '../@Types/navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const screenWithTopbarOptions: NativeStackNavigationOptions = {};

export const screenWithoutTopbarOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
export const groupModalContainedModalScreenOptions: NativeStackNavigationOptions =
  {
    presentation: 'containedModal',
  };
export const groupModalFormSheetScreenOptions: NativeStackNavigationOptions = {
  presentation: 'formSheet',
};

export const HomeStackNavigatior =
  createNativeStackNavigator<HomeStackParamList>();

export const AddProductStackNavigatior =
  createNativeStackNavigator<NewProductStackParamList>();

export const BottomTab = createBottomTabNavigator<BottomStackParamList>();
