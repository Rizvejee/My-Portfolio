'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { personalInfo, typingRoles, techStack } from '@/data/index';
import styles from './Hero.module.css';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const type = () => {
      const current = typingRoles[roleIndex];
      if (!deleting) {
        charIndex++;
        if (typedRef.current) {
          typedRef.current.textContent = current.slice(0, charIndex);
        }
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        charIndex--;
        if (typedRef.current) {
          typedRef.current.textContent = current.slice(0, charIndex);
        }
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % typingRoles.length;
        }
      }
      timer = setTimeout(type, deleting ? 55 : 95);
    };

    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
  <section className={styles.hero} id="home">
    <div className={styles.gridBg} />
    <div className={styles.blobOne} />
    <div className={styles.blobTwo} />

    <div className={styles.inner}>

      {/* ── Left: Text ── */}
      <motion.div
        className={styles.textSide}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Available for Freelance Work
        </div>

        <h1 className={styles.name}>
          Hi, I&apos;m <span className={styles.highlight}>Rizwan</span>
          <br />
          Ahmad
        </h1>

        <p className={styles.role}>
          I build&nbsp;
          <span className={styles.typedText} ref={typedRef} />
          <span className={styles.cursor} />
        </p>

        <p className={styles.bio}>{personalInfo.bio}</p>

        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>
            🚀 View Projects
          </a>
          <a href="#contact" className={styles.btnOutline}>
            📬 Contact Me
          </a>
          <a href={personalInfo.resumeUrl} className={styles.btnGhost} download>
            ⬇ Download Resume
          </a>
        </div>

        <div className={styles.socials}>
          <span className={styles.socialLabel}>Find me on</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.socialLink}
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>
      </motion.div>

      {/* ── Right: Image ── */}
      <motion.div
        className={styles.imageSide}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className={styles.profileCard}>
          <div className={styles.ring} />
          <div className={styles.ringTwo} />
          <div className={styles.profileImg}>👨‍💻</div>
          <div className={styles.badgeOne}>
            <span className={styles.dotGreen} />
            Open to Work
          </div>
          <div className={styles.badgeTwo}>
            <span className={styles.dotBlue} />
            Full Stack Dev
          </div>
          <div className={styles.badgeThree}>
            <span className={styles.dotSky} />
            5+ Yrs Journey
          </div>
        </div>

        <div className={styles.techStack}>
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              className={styles.techChip}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

    </div>

    <div className={styles.scrollIndicator}>
      <div className={styles.scrollMouse}>
        <div className={styles.scrollWheel} />
      </div>
      <span>Scroll Down</span>
    </div>
  </section>
);
}