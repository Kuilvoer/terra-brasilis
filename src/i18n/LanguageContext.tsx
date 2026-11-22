import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { TRANSLATIONS, type LanguageCode, type TranslationDictionary } from './translations';

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'terra_brasilis_lang_v2';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (saved && (saved === 'nl' || saved === 'en' || saved === 'pt')) {
        return saved;
      }
    } catch {
      // Ignore storage errors
    }
    return 'nl';
  });

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors
    }
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  }, [language]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t: TRANSLATIONS[language]
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

/** Crisp SVG Flags for Nederlands (NL), English (UK), and Português (Brasil) */
export const FlagIcon: React.FC<{ code: LanguageCode; className?: string }> = ({
  code,
  className = 'w-5 h-3.5 rounded-[2px] shadow-sm object-cover shrink-0'
}) => {
  if (code === 'nl') {
    return (
      <svg viewBox="0 0 9 6" className={className} aria-label="Nederlands">
        <rect fill="#21468B" width="9" height="6" />
        <rect fill="#FFFFFF" width="9" height="4" />
        <rect fill="#AE1C28" width="9" height="2" />
      </svg>
    );
  }

  if (code === 'en') {
    return (
      <svg viewBox="0 0 60 30" className={className} aria-label="English">
        <clipPath id="uk-clip">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <g clipPath="url(#uk-clip)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 720 504" className={className} aria-label="Português (Brasil)">
      <rect width="720" height="504" fill="#009b3a" />
      <polygon points="360,64 656,252 360,440 64,252" fill="#fedf00" />
      <circle cx="360" cy="252" r="105" fill="#002776" />
      <path
        d="M258,232 C310,208 415,222 462,268"
        fill="none"
        stroke="#ffffff"
        strokeWidth="16"
      />
    </svg>
  );
};
