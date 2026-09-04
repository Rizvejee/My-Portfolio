'use client';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
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
        <AnimateOnScroll variant="fadeUp">
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
        </AnimateOnScroll>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => {
            const cardClass = index === 1
              ? `${styles.card} ${styles.cardFeatured}`
              : styles.card;
            return (
              <AnimateOnScroll key={service.title} variant="fadeUp" delay={index * 0.1}>
                <div className={cardClass}>

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
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom Strip */}
        <AnimateOnScroll variant="fadeUp" delay={0.3}>
          <div className={styles.strip}>
            <p className={styles.stripTitle}>Every project includes:</p>
            <div className={styles.stripItems}>
              {features.map((f) => (
                <div key={f} className={styles.stripItem}>
                  <span className={styles.stripCheck}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}