import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {MainStack, screenWithTopbarOptions} from '../Config/navigation';
import {navigationProps} from '../@Types/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import {StyleSheet} from 'react-native';
import HomeScreen from '../Presentation/Screen/Home/HomeScreen';

const Navigation: React.FC<navigationProps> = ({theme}) => {
  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={[styles.safeArea, {backgroundColor: theme.colors.background}]}>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer theme={theme}>
          <MainStack.Navigator initialRouteName={SCREEN_NAME.HOME_SCREEN}>
            <MainStack.Screen
              options={screenWithTopbarOptions}
              name={SCREEN_NAME.HOME_SCREEN}
              component={HomeScreen}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default Navigation;
