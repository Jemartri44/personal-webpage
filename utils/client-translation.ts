"use client";

import { useLanguage } from '@/contexts/language-context';
import { TranslationKey, getTranslation } from './translation';

export function useTranslation() {
  const { language } = useLanguage();
  
  function t(key: TranslationKey): string {
    return getTranslation(key, language);
  }
  
  return { t };
}