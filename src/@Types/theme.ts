import {ThemeTitle} from '../Enum/Theme';

// Definir el tipo para una entrada de tema individual
export interface ThemeEntry {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    text_negative: string;
    text_secondary: string;
    border: string;
    notification: string;
    placeholder: string;
    icon: string;
    danger: string;
    success: string;
  };
}

// Crear una interfaz para el objeto de tema usando ThemeTitle como clave
export type Theme = {
  [key in ThemeTitle]: ThemeEntry;
};
