import es from './es.json';
import en from './en.json';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';
const ui = { es, en };

export function useTranslations(lang: keyof typeof ui) {
  return function t(keys: string) {
    const keysArray = keys.split('.');
    let value: any = ui[lang];
    for (const key of keysArray) {
      if (value === undefined) break;
      value = value[key];
    }
    // Fallback al idioma por defecto si no existe la traducción
    if (value === undefined) {
      let fallbackValue: any = ui[defaultLang];
      for (const key of keysArray) {
        if (fallbackValue === undefined) break;
        fallbackValue = fallbackValue[key];
      }
      return fallbackValue || keys;
    }
    return value;
  }
}
