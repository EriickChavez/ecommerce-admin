import React, {forwardRef, useImperativeHandle, useMemo} from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import styles from './styles';
import Text from '../Text/Text';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';

interface TextInputProps {
  leftIcon?: JSX.Element | JSX.Element[];
  rightIcon?: JSX.Element | JSX.Element[];
  placeholder?: string;
  TextInputProps?: RNTextInputProps;
  theme?: ThemeEntry;
  error?: {
    borderColor: string;
    color: string;
  };
  borderRadius?: {
    borderTopLeftRadius: number;
    borderBottomLeftRadius: number;
    borderTopRightRadius: number;
    borderBottomRightRadius: number;
  };
}

export interface TextInputRef {
  focus: () => void;
  blur: () => void;
}

const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      leftIcon,
      rightIcon,
      TextInputProps,
      theme = themes.light,
      borderRadius = {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
      },
      error,
    },
    ref,
  ) => {
    const textInputRef = React.createRef<RNTextInput>();

    useImperativeHandle(ref, () => ({
      focus: () => {
        textInputRef?.current?.focus();
      },
      blur: () => {
        textInputRef?.current?.blur();
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
    const isEditable = useMemo(
      () => TextInputProps?.editable,
      [TextInputProps],
    );

    const hasValue = useMemo(() => {
      return !!TextInputProps?.value;
    }, [TextInputProps]);

    const hasPlaceholder = useMemo(
      () => !!TextInputProps?.placeholder,
      [TextInputProps],
    );

    const styleValuePlaceholder = hasValue
      ? {color: theme.colors.text}
      : hasPlaceholder
      ? {color: theme.colors.text_secondary}
      : {};

    return (
      <View
        style={[
          styles.container,
          borderRadius,
          error && {borderColor: error.borderColor},
        ]}>
        {renderLeftIcon()}
        {isEditable ? (
          <RNTextInput
            ref={textInputRef}
            style={[styles.input, error && {color: error?.color}]}
            placeholderTextColor={theme.colors.text_secondary}
            {...TextInputProps}
          />
        ) : (
          <Text style={[styles.input, styleValuePlaceholder]}>
            {hasValue
              ? TextInputProps?.value
              : hasPlaceholder
              ? TextInputProps?.placeholder
              : ''}
          </Text>
        )}
        {renderRightIcon()}
      </View>
    );
  },
);

export default TextInput;
