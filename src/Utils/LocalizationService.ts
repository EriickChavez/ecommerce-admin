import LocalizedStrings from 'react-native-localization';
import EN from '../Constants/Strings/EN';
import ES from '../Constants/Strings/ES';

export const LocalizationService = new LocalizedStrings({
  'en-us': EN,
  en: EN,
  es: ES,
});

export const changeLaguage = (languageKey: string) => {
  LocalizationService.setLanguage(languageKey);
};

export default LocalizationService;
