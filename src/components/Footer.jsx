import React from 'react';
import { sitePath } from '../sitePath';

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <img
              src={sitePath('ag_live_logo.png')}
              alt="AG Live"
              style={{ width: '48px', height: '48px', borderRadius: '14px', border: '1.5px solid var(--sky-ice)' }}
            />
            <div>
              <span style={{ fontSize: '22px', fontWeight: 900, color: 'white' }}>AG Live</span>
              <span style={{ display: 'block', fontSize: '11px', color: 'var(--sky-light)', fontWeight: 700 }}>
                LIVE AI KRISHI
              </span>
            </div>
          </div>
          <p>{t.footer.desc}</p>
        </div>

        <div className="footer-col">
          <h5>{t.footer.quickLinks}</h5>
          <ul>
            <li><a href="#features">{t.nav.features}</a></li>
            <li><a href="#crops">{t.nav.crops}</a></li>
            <li><a href="#how-it-works">{t.nav.howItWorks}</a></li>
            <li><a href="#pricing">{t.nav.pricing}</a></li>
            <li><a href="#reviews">{t.nav.reviews}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>{t.footer.crops}</h5>
          <ul>
            <li><a href="#crops">💬 Chat</a></li>
            <li><a href="#crops">📷 Camera</a></li>
            <li><a href="#crops">🎙️ Live voice</a></li>
            <li><a href="#crops">📹 Video</a></li>
            <li><a href="#pricing">💎 Plans</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>{t.footer.legalTitle}</h5>
          <ul>
            <li><a href={sitePath('privacy-policy/')}>Privacy Policy</a></li>
            <li><a href={sitePath('terms-and-conditions/')}>Terms &amp; Conditions</a></li>
            <li><a href={sitePath('about-us/')}>About</a></li>
            <li><a href={sitePath('contact-us/')}>Contact</a></li>
            <li><a href={sitePath('account-deletion/')}>Account Deletion</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>{t.footer.copyright}</div>
        <div style={{ color: 'var(--sky-ice)', fontSize: '12px' }}>
          {t.footer.packageLine}
        </div>
      </div>
    </footer>
  );
}
