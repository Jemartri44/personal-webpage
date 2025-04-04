import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/contexts/language-context";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function useFormattedDate() {
  const { language } = useLanguage();
  
  // Map your language codes to locale codes
  const localeMap: Record<string, string> = {
    en: 'en-US',
    es: 'es-ES'
  };
  
  // Get the appropriate locale
  const locale = localeMap[language] || 'en-US';
  
  // Return a formatting function that uses the current language
  return (date: Date): string => {
    return date.toLocaleDateString(locale, {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
}
