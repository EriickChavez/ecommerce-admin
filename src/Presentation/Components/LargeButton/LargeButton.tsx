import React from 'react';
import {TouchableOpacity, ViewStyle, StyleProp, TextStyle} from 'react-native';
import Text from '../Text/Text';
import styles from './styles';

interface LargeButtonProps {
  title: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const LargeButton: React.FC<LargeButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LargeButton;
