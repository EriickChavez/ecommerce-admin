import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {RootStackParamList} from '../@Types/navigation';

export const MainStack = createNativeStackNavigator<RootStackParamList>();

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
