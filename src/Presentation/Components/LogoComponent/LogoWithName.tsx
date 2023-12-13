import LogoIcon from '../../../Assets/svg/Logo';
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface LogoWithNameProps {}

const LogoWithName: React.FC<LogoWithNameProps> = ({}) => {
  return (
    <View style={styles.row}>
      <LogoIcon />
      <Text style={styles.font}>Brand</Text>
    </View>
  );
};

export default LogoWithName;
