import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';

const Text: React.FC<TextProps> = props => {
  return <RNText style={[styles.text]} {...props} />;
};

export default Text;
