import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {BottomStackParamList} from '../@Types/navigation';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeStackParamList} from '../@Types/navigation.inventory';
import {NewProductStackParamList} from '../@Types/navigation.newProduct';
import {SettingsStackParamList} from '../@Types/navigation.settings';
import {AuthStackParamList} from '../@Types/navigation.auth';

export const screenWithTopbarOptions: NativeStackNavigationOptions = {};

export const screenWithoutTopbarOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
export const bottomBarWithoutTopbarOptions: BottomTabNavigationOptions = {
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
