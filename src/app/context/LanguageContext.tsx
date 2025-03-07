import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext<{ lang: string; setLang: (lang: string) => void }>({
  lang: "fr",
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    const browserLang = navigator.language.startsWith("fr") ? "fr" : "en";
    setLang(browserLang);
  }, []);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
