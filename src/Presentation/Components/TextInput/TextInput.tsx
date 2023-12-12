import React, {forwardRef, useImperativeHandle} from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import styles from './styles';

interface TextInputProps {
  leftIcon?: JSX.Element | JSX.Element[];
  rightIcon?: JSX.Element | JSX.Element[];
}

export interface TextInputRef {
  focus: () => void;
}

const TextInput = forwardRef<TextInputRef, TextInputProps>(
  ({leftIcon, rightIcon}, ref) => {
    const textInputRef = React.createRef<RNTextInput>();

    useImperativeHandle(ref, () => ({
      focus: () => {
        textInputRef?.current?.focus();
      },
    }));

    const renderLeftIcon = () => {
      return leftIcon ? (
        <View style={[styles.iconLeft]}>{leftIcon}</View>
      ) : null;
    };
    const renderRightIcon = () => {
      return rightIcon ? (
        <View style={[styles.iconRight]}>{rightIcon}</View>
      ) : null;
    };

    return (
      <View style={[styles.container]}>
        {renderLeftIcon()}
        <RNTextInput
          ref={textInputRef}
          style={[styles.input]}
          placeholder="Search"
          placeholderTextColor="#1C1C1C"
        />
        {renderRightIcon()}
      </View>
    );
  },
);

export default TextInput;
