import React from 'react';
import {
  AuthenticationStack,
  screenWithTopbarOptions,
} from '../Config/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import LoginScreen from '../Presentation/Screen/Login/LoginScreen';
import SignUpScreen from '../Presentation/Screen/Signup/SignupScreen';
import {NavigationContainer} from '@react-navigation/native';
import {navigationProps} from '../@Types/navigation';
import LocalizationService from '../Utils/LocalizationService';

const AuthStack: React.FC<navigationProps> = () => {
  return (
    <NavigationContainer>
      <AuthenticationStack.Navigator
        initialRouteName={SCREEN_NAME.LOGIN_SCREEN}>
        <AuthenticationStack.Screen
          options={{
            ...screenWithTopbarOptions,
            title: LocalizationService.titleScreen.LOGIN_SCREEN,
          }}
          name={SCREEN_NAME.LOGIN_SCREEN}
          component={LoginScreen}
        />
        <AuthenticationStack.Screen
          options={{
            ...screenWithTopbarOptions,
            title: LocalizationService.titleScreen.SIGNUP_SCREEN,
          }}
          name={SCREEN_NAME.SIGNUP_SCREEN}
          component={SignUpScreen}
        />
      </AuthenticationStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
