'use client';

import { personalInfo } from '@/data/index';
import styles from './About.module.css';

const stats = [
  { number: '5+',  label: 'Years of Learning' },
  { number: '20+', label: 'Projects Built' },
  { number: '3+',  label: 'Happy Clients' },
  { number: '2',   label: 'Fields of Work' },
];

const interests = [
  { icon: '💻', label: 'Web Development' },
  { icon: '📱', label: 'Mobile Apps' },
  { icon: '✂️', label: 'Tailoring' },
  { icon: '📚', label: 'Self Learning' },
  { icon: '🎯', label: 'Problem Solving' },
  { icon: '🚀', label: 'New Technologies' },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.tag}>About Me</span>
          <h2 className={styles.title}>
            Who I <span>Am</span>
          </h2>
          <p className={styles.subtitle}>
            A self-taught developer with a passion for building
            modern digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.content}>

          {/* Left: Image */}
          <div className={styles.imageSide}>
            <div className={styles.imageWrap}>
              <div className={styles.imagePlaceholder}>👨‍💻</div>
              <div className={styles.expBadge}>
                <span className={styles.expNumber}>5+</span>
                <span className={styles.expText}>Years of<br />Learning</span>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className={styles.textSide}>

            <div className={styles.introCard}>
              <p className={styles.introText}>
                Hi! I&apos;m <strong>Rizwan Ahmad</strong>, a 35-year-old
                Full Stack &amp; Mobile App Developer from Hazro, Attock,
                Punjab, Pakistan. I have been a professional tailor since
                2002, and in 2020 I discovered my passion for programming
                and started learning web development from scratch.
              </p>
              <p className={styles.introText}>
                Since then, I have learned HTML, CSS, JavaScript, React,
                Next.js, React Native with Expo, Node.js, Express, and
                MongoDB — all through self-study and dedication. My goal
                is to become a professional full-stack developer and build
                products that make a real difference.
              </p>
            </div>

            {/* Interests */}
            <div className={styles.interestsWrap}>
              <h3 className={styles.interestsTitle}>My Interests</h3>
              <div className={styles.interests}>
                {interests.map((item) => (
                  <div key={item.label} className={styles.interestChip}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={styles.actions}>
              <a
                href="#contact"
                className={styles.btnPrimary}
              >
                📬 Get In Touch
              </a>
              <a
                href={personalInfo.resumeUrl}
                className={styles.btnOutline}
                download
              >
                ⬇ Download Resume
              </a>
            </div>

          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}