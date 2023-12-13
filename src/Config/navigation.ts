import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  AuthStackParamList,
  BottomStackParamList,
  HomeStackParamList,
  NewProductStackParamList,
  SettingsStackParamList,
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
export const SettingsStackNavigatior =
  createNativeStackNavigator<SettingsStackParamList>();

export const BottomTab = createBottomTabNavigator<BottomStackParamList>();

export const AuthenticationStack =
  createNativeStackNavigator<AuthStackParamList>();
