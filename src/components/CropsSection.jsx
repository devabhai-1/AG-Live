import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { sitePath } from '../sitePath';

export default function CropsSection({ t }) {
  const firstId = t.crops.tabs[0]?.id || 'chat';
  const [activeTab, setActiveTab] = useState(firstId);
  const crop = t.crops.details[activeTab] || t.crops.details[firstId];

  return (
    <section className="section" id="crops" style={{ background: 'var(--sky-soft)', borderRadius: '36px' }}>
      <div className="section-title-wrap">
        <span className="section-pill">{t.crops.pill}</span>
        <h2 className="section-heading">{t.crops.title}</h2>
        <p className="section-desc">{t.crops.subtitle}</p>
      </div>

      <div className="crop-tabs">
        {t.crops.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`crop-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      <div className="crop-detail-card">
        <div>
          <h3 className="crop-detail-title">{crop.title}</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '15px' }}>
            {t.crops.intro}
          </p>

          <div>
            {crop.points.map((pt, i) => (
              <div className="crop-point" key={i}>
                <CheckCircle2 className="crop-point-icon" size={20} />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px' }}>
            <a href="#download" className="btn-primary" style={{ padding: '12px 22px', fontSize: '14px' }}>
              <span>{t.crops.cta}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div style={{ background: 'var(--sky-mist)', borderRadius: '22px', padding: '24px', border: '1.2px solid var(--sky-ice)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <img src={sitePath('ag_live_logo.png')} alt="Logo" style={{ width: '48px', height: '48px', borderRadius: '14px' }} />
            <div>
              <strong style={{ display: 'block', color: 'var(--sky-deep)' }}>{t.crops.assistantTitle}</strong>
              <span style={{ fontSize: '12px', color: '#0284C7', fontWeight: 800 }}>{t.crops.assistantBadge}</span>
            </div>
          </div>

          <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '16px', border: '1px solid var(--sky-ice)', marginBottom: '12px' }}>
            <p style={{ fontSize: '13.5px', color: 'var(--text-body)', margin: 0 }}>
              {t.crops.assistantBubble}
            </p>
          </div>

          <div style={{ textAlign: 'right', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
            {t.crops.assistantNote}
          </div>
        </div>
      </div>
    </section>
  );
}
