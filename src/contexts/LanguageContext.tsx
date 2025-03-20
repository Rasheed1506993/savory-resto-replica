
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '@/lib/translations';

type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
