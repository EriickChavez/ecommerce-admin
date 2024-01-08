import React, {useMemo, forwardRef, useImperativeHandle} from 'react';
import TextInput from '../TextInput/TextInput';
import {TextOptions} from '../../../@Types/picker';
import {INPUT_TYPE} from '../../../Enum';
import {TextInput as RNTextInput} from 'react-native';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';
interface TextInputProps {
  isEditable?: boolean;
  theme?: ThemeEntry;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type?: INPUT_TYPE;
  textOptions?: TextOptions;
  borderRadius?: {
    borderTopLeftRadius: number;
    borderBottomLeftRadius: number;
    borderTopRightRadius: number;
    borderBottomRightRadius: number;
  };
}
interface TextInputRef {
  focus: () => void;
  blur: () => void;
  isFocused: () => boolean;
}

const TxtInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      theme = themes.light,
      isEditable = true,
      onChangeText = () => {},
      placeholder = '',
      textOptions = {
        textOptions: {
          contextMenuHidden: false,
          error: false,
        },
      },
      borderRadius = {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
      },
      value = '',
      type = INPUT_TYPE.TEXT,
    },
    ref,
  ) => {
    const textInputRef = React.createRef<RNTextInput>();

    useImperativeHandle(ref, () => ({
      blur: () => {
        textInputRef?.current?.blur();
      },
      focus: () => {
        textInputRef.current?.focus();
      },
      isFocused: () => {
        if (textInputRef?.current) {
          return textInputRef?.current?.isFocused();
        }
        return false;
      },
    }));

    const keyboardType = useMemo(() => {
      if (type === INPUT_TYPE.NUMBER) {
        return 'numeric';
      }
    }, [type]);

    return (
      <TextInput
        theme={theme}
        ref={textInputRef}
        TextInputProps={{
          editable: isEditable,
          placeholder,
          value,
          onChangeText,
          keyboardType,
          contextMenuHidden: textOptions.textOptions.contextMenuHidden,
          secureTextEntry: type === INPUT_TYPE.PASSWORD,
        }}
        borderRadius={borderRadius}
        error={
          textOptions.textOptions.error
            ? {borderColor: 'red', color: 'red'}
            : undefined
        }
      />
    );
  },
);

export default TxtInput;
