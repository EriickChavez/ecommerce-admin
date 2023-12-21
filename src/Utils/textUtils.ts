export const capitalizeFirstLetter = (input: string): string => {
  // Validar que la entrada sea una cadena no vacía o una cadena que consista solo en números
  if (typeof input !== 'string' || input.length === 0 || /^\d+$/.test(input)) {
    return input; // Devolver la cadena original si no cumple con las condiciones
  }

  // Convertir la primera letra a mayúscula y concatenar el resto de la cadena
  const firstLetter = input.charAt(0).toUpperCase();
  const restOfTheString = input.slice(1);

  // Devolver la cadena completa con la primera letra en mayúscula
  return firstLetter + restOfTheString;
};
