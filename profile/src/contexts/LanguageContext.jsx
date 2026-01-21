import React, { createContext, useState, useContext, useEffect } from 'react';
import * as enTranslations from '../translations/en';
import * as viTranslations from '../translations/vi';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi');
  const [translations, setTranslations] = useState(viTranslations);

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-language');
    if (savedLang) {
      setLanguage(savedLang);
      setTranslations(savedLang === 'en' ? enTranslations : viTranslations);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'vi' ? 'en' : 'vi';
    setLanguage(newLang);
    setTranslations(newLang === 'en' ? enTranslations : viTranslations);
    localStorage.setItem('portfolio-language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};