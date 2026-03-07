// src/context/LanguageContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

// ÇEVİRİ SÖZLÜĞÜN (Bütün sabit metinleri buraya ekleyebilirsin)
const translations = {
  tr: {
    heroGreeting: "Merhaba, Ben Yunus Emre",
    heroTitle: "Dijital Deneyimler",
    heroHighlight: "Tasarlıyor ve Kodluyorum.",
    heroDesc: "Karmaşık problemleri analiz edip, iş gereksinimlerini ölçeklenebilir, yapay zeka destekli ve kullanıcı odaklı dijital ürünlere dönüştüren bir Mühendisim.",
    btnProjects: "Projelerimi Gör",
    btnCV: "CV İndir",
    navHome: "Ana Sayfa",
  },
  en: {
    heroGreeting: "Hi, I'm Yunus Emre",
    heroTitle: "Designing and Coding",
    heroHighlight: "Digital Experiences.",
    heroDesc: "I am an Engineer who analyzes complex problems and transforms business requirements into scalable, AI-powered, and user-centric digital products.",
    btnProjects: "View My Projects",
    btnCV: "Download CV",
    navHome: "Home",
  }
};

type TranslationKeys = keyof typeof translations.tr;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('tr');
  const [mounted, setMounted] = useState(false);

  // Kullanıcının daha önce seçtiği dili hatırla
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('portfolio_lang') as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'tr' ? 'en' : 'tr';
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const t = (key: TranslationKeys) => {
    return translations[lang][key] || key;
  };

  // Sunucu (SSR) uyuşmazlığını önlemek için
  if (!mounted) return null; 

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
};