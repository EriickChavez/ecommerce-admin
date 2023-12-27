import React, {useMemo} from 'react';
import {View, TextInput, StyleProp, TextStyle, ViewStyle} from 'react-native';
import styles from './styles';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';
import Text from '../Text/Text';

interface ExpandableTextInputProps {
  placeholder?: string;
  theme?: ThemeEntry;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  value?: string;
  onChangeText?: (text: string) => void;
  text?: string;
  placeholderTextColor?: string;
}

const ExpandableTextInput: React.FC<ExpandableTextInputProps> = ({
  placeholder,
  theme = themes.light,
  textStyle,
  value = '',
  onChangeText = () => {},
  containerStyle,
  text = '',
  placeholderTextColor = '#949BA6',
}) => {
  const textColor = {color: theme.colors.text};

  const maxCharacters = 120;
  const expanded = useMemo(() => value.length > maxCharacters, [value]);
  const hasText = useMemo(() => text.length > 0, [text]);
  return (
    <>
      {hasText && <Text style={styles.text}>{text}</Text>}
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.border,
          },
          containerStyle,
        ]}>
        <TextInput
          style={[textColor, textStyle, styles.text]}
          multiline={expanded}
          numberOfLines={expanded ? undefined : 1}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
};

export default ExpandableTextInput;
