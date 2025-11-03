import { createContext, useState, useContext, useMemo } from 'react';
import { portfolioContent } from '../data/content';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); 

  const currentContent = useMemo(() => {
    return portfolioContent[lang];
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, currentContent, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);