"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// List of language codes that should use Spanish
const spanishLocales = [
  'es', 'es-es', 'es-mx', 'es-ar', 'es-co', 'es-pe', 
  'es-cl', 'es-ve', 'es-ec', 'es-gt', 'es-cu', 'es-bo', 
  'es-do', 'es-hn', 'es-py', 'es-sv', 'es-ni', 'es-pr', 
  'es-uy', 'es-pa', 'es-cr', 'es-419'
];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Don't set a default yet - we'll determine it based on detection
  const [language, setLanguage] = useState<Language | null>(null);
  // Add a flag to track if we've initialized language preference
  const [isInitialized, setIsInitialized] = useState(false);

  // This effect runs once on component mount to DETERMINE language
  useEffect(() => {
    // Try to load saved preference first
    console.debug("Initializing language...");
    
    let detectedLanguage: Language = 'en'; // Default if nothing else works
    
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
        console.debug(`Found saved language preference: ${savedLanguage}`);
        detectedLanguage = savedLanguage;
      } else {
        console.debug("No saved preference, detecting from browser...");
        // No saved preference, detect from browser
        detectedLanguage = detectBrowserLanguage();
      }
    } catch (e) {
      console.debug("Error accessing localStorage, detecting from browser...");
      detectedLanguage = detectBrowserLanguage();
    }
    
    console.debug(`Setting initial language to: ${detectedLanguage}`);
    setLanguage(detectedLanguage);
    setIsInitialized(true);
  }, []);

  // This effect runs to SAVE language preference, but only after initialization
  useEffect(() => {
    // Only save after we've properly initialized and language is set
    if (isInitialized && language) {
      console.debug(`Saving language preference: ${language}`);
      try {
        localStorage.setItem('language', language);
      } catch (error) {
        console.debug("Could not save language preference");
      }
    }
  }, [language, isInitialized]);

  // Function to detect user's language from browser settings
  function detectBrowserLanguage(): Language {
    try {
      console.debug("Detecting browser language...");
      
      // Get preferred languages from the browser
      let detectedLanguage: Language = 'en'; // Default to English
      
      // Method 1: navigator.languages (modern browsers, returns array of preferences)
      if (typeof window !== 'undefined' && navigator.languages && navigator.languages.length) {
        for (const locale of navigator.languages) {
          const lowerLocale = locale.toLowerCase();
          
          console.debug(`Checking browser locale: ${lowerLocale}`);
          
          // Check if this is a Spanish locale
          if (spanishLocales.includes(lowerLocale) || lowerLocale.startsWith('es-')) {
            detectedLanguage = 'es';
            console.debug(`Detected Spanish from browser settings: ${locale}`);
            break;
          }
        }
      } 
      // Method 2: navigator.language (older browsers, returns a single language)
      else if (typeof window !== 'undefined' && navigator.language) {
        const browserLang = navigator.language.toLowerCase();
        console.debug(`Checking navigator.language: ${browserLang}`);
        
        if (spanishLocales.includes(browserLang) || browserLang.startsWith('es-')) {
          detectedLanguage = 'es';
          console.debug(`Detected Spanish from navigator.language: ${browserLang}`);
        }
      }
      
      console.debug(`Browser detection result: ${detectedLanguage}`);
      return detectedLanguage;
    } catch (error) {
      console.error("Error detecting browser language:", error);
      return 'en'; // Fall back to default English
    }
  }

  // During initialization, show loading or use a default
  if (language === null) {
    return null; // Or return a loading state if needed
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}