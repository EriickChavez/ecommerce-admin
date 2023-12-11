import {ThemeTitle} from '../Enum/theme';

// Definir el tipo para una entrada de tema individual
export interface ThemeEntry {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    placeholder: string;
    icon: string;
    text_secondary: string;
    danger: string;
    success: string;
  };
}

// Crear una interfaz para el objeto de tema usando ThemeTitle como clave
export type Theme = {
  [key in ThemeTitle]: ThemeEntry;
};
