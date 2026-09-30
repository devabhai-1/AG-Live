import React from 'react';
import { Download, Sparkles } from 'lucide-react';
import { sitePath } from '../sitePath';

export default function Hero({ t }) {
  return (
    <section className="hero-section" id="download">
      <div className="hero-container">
        <div className="hero-text-content">
          <div className="hero-tag">
            <Sparkles size={16} color="#0284C7" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="hero-heading">{t.hero.headline}</h1>
          <p className="hero-subheadline">{t.hero.subheadline}</p>

          <div className="hero-cta-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.agfarmer.live"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.365-.365-.61-.926-.61-1.616V3.43c0-.69.245-1.25.61-1.616zm11.606 11.606l2.42 2.42-12.016 6.945 9.596-9.365zm2.42-2.42L5.619 1.635l12.016 6.945-2.42 2.42zm1.42 1.42l3.415 1.972c.98.566.98 1.488 0 2.054L19.055 12.42z"/>
              </svg>
              <span>{t.hero.downloadPlay}</span>
            </a>

            <a href="#pricing" className="btn-secondary">
              <Download size={18} />
              <span>{t.nav.pricing}</span>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="stat-num">{t.hero.farmersCount}</div>
              <div className="stat-label">{t.hero.statLabel1}</div>
            </div>
            <div>
              <div className="stat-num">{t.hero.accuracy}</div>
              <div className="stat-label">{t.hero.statLabel2}</div>
            </div>
            <div>
              <div className="stat-num">{t.hero.latency}</div>
              <div className="stat-label">{t.hero.statLabel3}</div>
            </div>
          </div>
        </div>

        <div className="phone-mockup-wrapper">
          <div className="phone-mockup-card">
            <img
              src={sitePath('ag_live_logo.png')}
              alt="AG Live App"
              className="phone-mockup-img"
              style={{ objectFit: 'contain', background: 'linear-gradient(160deg,#032B43,#0284C7)', padding: '18%' }}
            />
          </div>

          <div className="floating-badge-1">
            <span>{t.hero.floatingBadge1}</span>
          </div>

          <div className="floating-badge-2">
            <span>{t.hero.floatingBadge2}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
