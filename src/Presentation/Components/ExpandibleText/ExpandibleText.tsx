import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import Text from '../Text/Text';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';

interface ExpandableTextProps {
  text?: string;
  theme?: ThemeEntry;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  theme = themes.light,
  textStyle,
  containerStyle,
}) => {
  const textColor = {color: theme.colors.text};
  // Estado para controlar si el texto está expandido o no
  const [expanded, setExpanded] = useState(false);

  // Función para alternar el estado de expansión
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Número de líneas que se muestran cuando el texto está colapsado
  const collapsedLines = 2;

  // Texto que se muestra en el botón
  const buttonText = expanded ? 'Read less' : 'Read more';
  const maxCharacters = 120;

  if (!text) {
    return null;
  }
  if (`${text}`.length < maxCharacters) {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.border,
          },
          containerStyle,
        ]}>
        <Text style={[styles.text, textColor, textStyle]}>{text}</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.border,
        },
        containerStyle,
      ]}>
      <Text
        style={[styles.text, textColor, textStyle]}
        numberOfLines={expanded ? undefined : collapsedLines}>
        {text}
      </Text>
      <TouchableOpacity onPress={toggleExpanded}>
        <Text style={[styles.button, textColor]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpandableText;
