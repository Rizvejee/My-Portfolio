import Navbar from '@/components/layout/Navbar';
import { projects } from '@/data/index';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

const BackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === id);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} – Rizwan Ahmad`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === id);
  if (!project) notFound();

  const overview = [
    {
      label: 'Category',
      value: project.category,
    },
    {
      label: 'Technologies',
      value: project.tags.join(', '),
    },
    {
      label: 'Status',
      value: 'Completed',
    },
    {
      label: 'Type',
      value: project.category === 'Mobile'
        ? 'Mobile Application'
        : 'Web Application',
    },
  ];

  const features = [
    'Responsive design across all devices',
    'Clean and maintainable code structure',
    'Modern UI with smooth animations',
    'Optimized for performance and speed',
    'User-friendly interface and experience',
    'Cross-browser compatibility',
  ];

  return (
    <div className={styles.page}>
    <Navbar />

      {/* Back Button */}
      <div className={styles.backWrap}>
        <Link href="/#projects" className={styles.backBtn}>
          <BackIcon />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.categoryBadge}>
            {project.category}
          </span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <GithubIcon />
              View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              <LinkIcon />
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.content}>

          {/* Left Column */}
          <div className={styles.mainCol}>

            {/* Image Placeholder */}
            <div className={styles.imageWrap}>
              <div className={styles.imagePlaceholder}>
                {project.category === 'Mobile' ? '📱' : '🌐'}
              </div>
            </div>

            {/* Overview */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p className={styles.sectionText}>
                {project.description} This project was built with a focus
                on performance, clean code, and modern design principles.
                Every feature was carefully planned and implemented to
                deliver the best possible user experience.
              </p>
            </div>

            {/* Problem & Solution */}
            <div className={styles.twoCol}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🎯</div>
                <h3 className={styles.infoTitle}>Problem Statement</h3>
                <p className={styles.infoText}>
                  Identified a need for a modern, efficient, and
                  user-friendly solution that solves real-world
                  problems with clean technology.
                </p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💡</div>
                <h3 className={styles.infoTitle}>Solution</h3>
                <p className={styles.infoText}>
                  Built a complete application using modern tech stack
                  with focus on performance, scalability, and an
                  excellent user experience.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <div className={styles.featureGrid}>
                {features.map((f) => (
                  <div key={f} className={styles.featureItem}>
                    <span className={styles.featureCheck}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column — Sidebar */}
          <div className={styles.sidebar}>

            {/* Project Info */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Project Info</h3>
              <div className={styles.infoList}>
                {overview.map((item) => (
                  <div key={item.label} className={styles.infoRow}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    <span className={styles.infoValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Tech Stack</h3>
              <div className={styles.tagList}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.techTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Links</h3>
              <div className={styles.linkList}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sideLink}
                >
                  <GithubIcon />
                  GitHub Repository
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sideLink}
                >
                  <LinkIcon />
                  Live Demo
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}