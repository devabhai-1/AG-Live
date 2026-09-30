import React from 'react';
import { Globe, Download } from 'lucide-react';
import { sitePath } from '../sitePath';

export default function Navbar({ t, onOpenLanguageModal, currentLang }) {
  return (
    <header className="navbar">
      <a href="#" className="nav-brand">
        <img src={sitePath('ag_live_logo.png')} alt="AG Live Logo" className="nav-logo" />
        <div>
          <span className="nav-brand-title">AG Live</span>
          <span className="nav-brand-tag">{t.nav.tagline}</span>
        </div>
      </a>

      <ul className="nav-links">
        <li><a href="#features">{t.nav.features}</a></li>
        <li><a href="#crops">{t.nav.crops}</a></li>
        <li><a href="#how-it-works">{t.nav.howItWorks}</a></li>
        <li><a href="#pricing">{t.nav.pricing}</a></li>
        <li><a href="#reviews">{t.nav.reviews}</a></li>
        <li><a href="#legal">{t.nav.legal}</a></li>
      </ul>

      <div className="nav-actions">
        <button
          className="lang-switch-btn"
          onClick={onOpenLanguageModal}
          title="Change Language / भाषा बदलें"
        >
          <Globe size={16} />
          <span>{currentLang === 'hi' ? '🇮🇳 हिन्दी' : '🇬🇧 English'}</span>
        </button>

        <a href="#download" className="nav-download-btn">
          <Download size={16} />
          <span>{t.nav.download}</span>
        </a>
      </div>
    </header>
  );
}
