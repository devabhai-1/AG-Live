import React, { useState } from 'react';
import { sitePath } from '../sitePath';

export default function LanguageGateway({ onSelectLanguage, initialLang = 'hi' }) {
  const [selected, setSelected] = useState(initialLang);

  const languages = [
    {
      code: 'hi',
      name: 'हिन्दी',
      sub: 'भारतीय किसानों की अपनी भाषा',
      flag: '🇮🇳',
    },
    {
      code: 'en',
      name: 'English',
      sub: 'Standard Global Language',
      flag: '🇬🇧',
    },
  ];

  return (
    <div className="lang-gateway-backdrop" id="language-gateway">
      <div className="lang-gateway-modal">
        <div className="lang-logo-badge">
          <img src={sitePath('ag_live_logo.png')} alt="AG Live Logo" />
        </div>

        <h2 className="lang-gateway-title">
          {selected === 'en' ? 'Welcome Farmer!' : 'नमस्ते किसान भाई!'}
        </h2>
        <p className="lang-gateway-subtitle">
          {selected === 'en'
            ? 'Please choose your preferred language to explore AG Live:'
            : 'AG Live में आपका स्वागत है। कृपया अपनी भाषा चुनें:'}
        </p>

        <div className="lang-options-grid">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-card-btn ${selected === lang.code ? 'active' : ''}`}
              onClick={() => setSelected(lang.code)}
            >
              <span className="lang-flag">{lang.flag}</span>
              <div>
                <div className="lang-name">{lang.name}</div>
                <div className="lang-desc">{lang.sub}</div>
              </div>
            </button>
          ))}
        </div>

        <button className="lang-continue-btn" onClick={() => onSelectLanguage(selected)}>
          {selected === 'en' ? 'Continue to Website →' : 'आगे बढ़ें और ऐप देखें →'}
        </button>
      </div>
    </div>
  );
}
