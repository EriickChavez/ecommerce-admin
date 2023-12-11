import React from 'react';
import {View, Text} from 'react-native';
import {HomeScreenNavigationProps} from '../../../@Types/navigation';

const HomeScreen: React.FC<HomeScreenNavigationProps> = ({}) => {
  return (
    <View>
      <Text>Hola mundo</Text>
    </View>
  );
};

export default HomeScreen;
