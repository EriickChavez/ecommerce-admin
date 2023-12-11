import {Theme} from '../@Types/theme';
import {darkColors, lightColors} from './colors';

const themes: Theme = {
  light: {
    dark: false,
    colors: {
      primary: lightColors.primary,
      background: lightColors.background,
      card: lightColors.card,
      text: lightColors.text,
      border: lightColors.border,
      notification: lightColors.primary,
      placeholder: lightColors.placeholder,
      icon: lightColors.icon,
      text_secondary: lightColors.text_secondary,
      danger: lightColors.danger,
      success: lightColors.succeess,
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: darkColors.primary,
      background: darkColors.background,
      card: darkColors.card,
      text: darkColors.text,
      border: darkColors.border,
      notification: darkColors.primary,
      placeholder: darkColors.placeholder,
      icon: darkColors.icon,
      text_secondary: darkColors.text_secondary,
      danger: darkColors.danger,
      success: darkColors.succeess,
    },
  },
};

export default themes;
