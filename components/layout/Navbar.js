'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Services',   href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Mobile menu کھلا ہو تو scroll بند کریں
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);


  const headerClass = scrolled
    ? `${styles.header} ${styles.scrolled}`
    : styles.header;

  const hamburgerClass = menuOpen
    ? `${styles.hamburger} ${styles.open}`
    : styles.hamburger;

  const mobileMenuClass = menuOpen
    ? `${styles.mobileMenu} ${styles.mobileOpen}`
    : styles.mobileMenu;

  return (
    <header className={headerClass}>
      <nav className={styles.nav}>

        {/* Logo */}
        <a href="#home" className={styles.logo}>
          RA<span>.</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            const linkClass = isActive
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink;
            return (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className={styles.navRight}>

          {/* Theme Toggle */}
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Hire Me Button */}
          <a href="#contact" className={styles.hireBtn}>
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            className={hamburgerClass}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={mobileMenuClass}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            const mobileLinkClass = isActive
              ? `${styles.mobileLink} ${styles.active}`
              : styles.mobileLink;
            return (
              <li key={link.href}>
                
                  href={link.href}
                  className={mobileLinkClass}
                
                  {link.label}
                
              </li>
            );
          })}
        </ul>
        
          href="#contact"
          className={styles.mobileHireBtn}
        
          Hire Me
        
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}