import React, {useRef} from 'react';
import {navigationProps} from '../@Types/navigation';
import {SCREEN_NAME} from '../Enum/Screens';
import InventoryStack from './InventoryStack';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab, bottomBarWithoutTopbarOptions} from '../Config/navigation';
import {AddCircle, Category, Setting2} from 'iconsax-react-native';
import NewProductStack from './NewProductStack';
import Topbar from '../Presentation/Components/Topbar/Topbar';
import SettingsStack from './SettingsStack';
import {Animated, Dimensions, View} from 'react-native';
import styles from './styles';

const BottomNavigation: React.FC<navigationProps> = ({theme}) => {
  const tabOffSetValue = useRef(new Animated.Value(0)).current;
  const getWidth = () => {
    let {width} = Dimensions.get('window');
    width = width - 70;
    return width / 3;
  };

  return (
    <NavigationContainer theme={theme}>
      <BottomTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.bottomBar,
            {
              backgroundColor: theme.colors.bottomBar,
            },
            !theme.dark && styles.shaddows,
          ],
          freezeOnBlur: true,
        }}>
        <BottomTab.Screen
          name={SCREEN_NAME.INVENTORY_STACK}
          component={InventoryStack}
          options={{
            tabBarIcon: ({size, focused}) => {
              return (
                <View style={[styles.tabBar]}>
                  <Category
                    size={size}
                    color={
                      theme.dark ? theme.colors.text : theme.colors.primary
                    }
                    variant={focused ? 'Bold' : 'Linear'}
                  />
                </View>
              );
            },
            header: Topbar,
          }}
          listeners={({}) => ({
            tabPress: () => {
              Animated.spring(tabOffSetValue, {
                toValue: 1,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <BottomTab.Screen
          name={SCREEN_NAME.NEW_PRODUCT_STACK}
          component={NewProductStack}
          options={{
            ...bottomBarWithoutTopbarOptions,
            tabBarIcon: ({size, focused}) => {
              return (
                <View style={[styles.tabBar]}>
                  <AddCircle
                    size={size * 1.5}
                    color={
                      theme.dark ? theme.colors.text : theme.colors.primary
                    }
                    variant={focused ? 'Bold' : 'Linear'}
                  />
                </View>
              );
            },
          }}
          listeners={({}) => ({
            tabPress: () => {
              Animated.spring(tabOffSetValue, {
                toValue: getWidth() - 5,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <BottomTab.Screen
          name={SCREEN_NAME.SETTINGS_STACK}
          component={SettingsStack}
          options={{
            ...bottomBarWithoutTopbarOptions,
            tabBarIcon: ({size, focused}) => {
              return (
                <View style={styles.tabBar}>
                  <Setting2
                    size={size}
                    color={
                      theme.dark ? theme.colors.text : theme.colors.primary
                    }
                    variant={focused ? 'Bold' : 'Linear'}
                  />
                </View>
              );
            },
          }}
          listeners={({}) => ({
            tabPress: () => {
              Animated.spring(tabOffSetValue, {
                toValue: getWidth() * 2 - 10,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </BottomTab.Navigator>
      <Animated.View
        style={[
          {
            backgroundColor: theme.dark
              ? theme.colors.text
              : theme.colors.primary,
            width: getWidth() - 5,
            transform: [{translateX: tabOffSetValue}],
          },
          styles.indicator,
        ]}
      />
    </NavigationContainer>
  );
};

export default BottomNavigation;
