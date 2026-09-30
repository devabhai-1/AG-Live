import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingSection({ t }) {
  return (
    <section className="section" id="pricing">
      <div className="section-title-wrap">
        <span className="section-pill">{t.pricing.pill}</span>
        <h2 className="section-heading">{t.pricing.title}</h2>
        <p className="section-desc">{t.pricing.subtitle}</p>
      </div>

      <div className="pricing-grid">
        {t.pricing.plans.map((plan, index) => (
          <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={index}>
            {plan.featured && (
              <div className="pricing-badge">{plan.badge}</div>
            )}
            <div>
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                {plan.price} <span>/ {plan.period}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feat, fIndex) => (
                  <li key={fIndex}>
                    <Check size={18} color="#0284C7" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#download"
              className={plan.featured ? 'btn-primary' : 'btn-secondary'}
              style={{ textAlign: 'center', justifyContent: 'center' }}
            >
              <span>{plan.cta}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
