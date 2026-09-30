import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import LanguageGateway from './components/LanguageGateway';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CropsSection from './components/CropsSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import ComparisonSection from './components/ComparisonSection';
import FAQSection from './components/FAQSection';
import Testimonials from './components/Testimonials';
import LegalSection from './components/LegalSection';
import LegalPage, { legalKeyFromPath } from './components/LegalPage';
import Footer from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState('hi');
  const [showLanguageGateway, setShowLanguageGateway] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('ag_live_lang');
    if (saved && (saved === 'hi' || saved === 'en')) {
      setCurrentLang(saved);
    }
  }, []);

  const handleLanguageSelected = (langCode) => {
    setCurrentLang(langCode);
    setShowLanguageGateway(false);
    localStorage.setItem('ag_live_lang', langCode);
  };

  const t = translations[currentLang] || translations.hi;
  const legalKey = legalKeyFromPath(window.location.pathname);

  if (legalKey) {
    return (
      <LegalPage
        pageKey={legalKey}
        lang={currentLang}
        onToggleLang={() => {
          const next = currentLang === 'hi' ? 'en' : 'hi';
          setCurrentLang(next);
          localStorage.setItem('ag_live_lang', next);
        }}
      />
    );
  }

  return (
    <div className="app-root">
      {showLanguageGateway && (
        <LanguageGateway
          onSelectLanguage={handleLanguageSelected}
          initialLang={currentLang}
        />
      )}

      <Navbar
        t={t}
        onOpenLanguageModal={() => setShowLanguageGateway(true)}
        currentLang={currentLang}
      />

      <main>
        <Hero t={t} />
        <Features t={t} />
        <CropsSection t={t} />
        <HowItWorks t={t} />
        <PricingSection t={t} />
        <ComparisonSection t={t} />
        <FAQSection t={t} />
        <Testimonials t={t} />
        <LegalSection t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
