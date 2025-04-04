import enTranslations from '@/translations/en.json';
import esTranslations from '@/translations/es.json';

const translations = {
  en: enTranslations,
  es: esTranslations,
};

export type TranslationKey = keyof typeof enTranslations;

// Server-safe translation function (doesn't use hooks)
export function getTranslation(key: TranslationKey, lang: string = 'en'): string {
  const safeLanguage = (translations[lang as keyof typeof translations]) ? lang : 'en';
  return translations[safeLanguage as keyof typeof translations][key] || key;
}