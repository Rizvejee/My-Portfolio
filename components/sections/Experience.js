'use client';

import { experience } from '@/data/index';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>My Journey</span>
          <h2 className={styles.title}>
            Experience &amp; <span>Timeline</span>
          </h2>
          <p className={styles.subtitle}>
            From tailoring to tech — my self-learning journey
            and professional experience over the years.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {experience.map((item, index) => {
            const isEven = index % 2 === 0;
            const rowClass = isEven
              ? `${styles.row} ${styles.rowLeft}`
              : `${styles.row} ${styles.rowRight}`;
            return (
              <div key={item.year} className={rowClass}>

                {/* Card */}
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.year}>{item.year}</span>
                    <span className={styles.company}>{item.company}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>

                {/* Center Dot */}
                <div className={styles.dotWrap}>
                  <div className={styles.dot} />
                </div>

                {/* Empty side */}
                <div className={styles.empty} />

              </div>
            );
          })}

          {/* Vertical Line */}
          <div className={styles.line} />
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Interested in working together?
          </p>
          <a href="#contact" className={styles.ctaBtn}>
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
}