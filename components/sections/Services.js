'use client';

import { services } from '@/data/index';
import styles from './Services.module.css';

const features = [
  'Responsive Design',
  'Clean Code',
  'Fast Performance',
  'SEO Friendly',
  'Cross Platform',
  'Modern UI/UX',
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>What I Offer</span>
          <h2 className={styles.title}>
            My <span>Services</span>
          </h2>
          <p className={styles.subtitle}>
            I provide high quality web and mobile development
            services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => {
            const cardClass = index === 1
              ? `${styles.card} ${styles.cardFeatured}`
              : styles.card;
            return (
              <div key={service.title} className={cardClass}>

                {index === 1 && (
                  <span className={styles.popularBadge}>
                    Most Popular
                  </span>
                )}

                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>

                <ul className={styles.featureList}>
                  {features.slice(0, 4).map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={index === 1
                    ? styles.btnFeatured
                    : styles.btnDefault}
                >
                  Get Started
                </a>

              </div>
            );
          })}
        </div>

        {/* Bottom Features Strip */}
        <div className={styles.strip}>
          <p className={styles.stripTitle}>
            Every project includes:
          </p>
          <div className={styles.stripItems}>
            {features.map((f) => (
              <div key={f} className={styles.stripItem}>
                <span className={styles.stripCheck}>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}