'use client';

import { skills } from '@/data/index';
import styles from './Skills.module.css';

const categoryIcons = {
  Frontend: '🌐',
  Mobile:   '📱',
  Backend:  '⚙️',
  Database: '🗄️',
  Tools:    '🛠️',
};

const skillLevels = {
  HTML:          90,
  CSS:           85,
  JavaScript:    80,
  React:         80,
  'Next.js':     75,
  'React Native':75,
  Expo:          70,
  'Node.js':     70,
  Express:       68,
  MongoDB:       65,
  Firebase:      65,
  Git:           80,
  GitHub:        80,
  'VS Code':     90,
  Linux:         60,
};

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>My Skills</span>
          <h2 className={styles.title}>
            Tech <span>Stack</span>
          </h2>
          <p className={styles.subtitle}>
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>

              {/* Card Header */}
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>
                  {categoryIcons[group.category]}
                </span>
                <h3 className={styles.cardTitle}>{group.category}</h3>
              </div>

              {/* Skill Items */}
              <div className={styles.skillList}>
                {group.items.map((skill) => (
                  <div key={skill} className={styles.skillItem}>
                    <div className={styles.skillTop}>
                      <span className={styles.skillName}>{skill}</span>
                      <span className={styles.skillPercent}>
                        {skillLevels[skill] ?? 70}%
                      </span>
                    </div>
                    <div className={styles.barBg}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${skillLevels[skill] ?? 70}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}