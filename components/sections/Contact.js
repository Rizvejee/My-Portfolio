'use client';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '@/data/index';
import styles from './Contact.module.css';

const SERVICE_ID  = 'service_5h1h9rd';   // ← اپنا ڈالیں
const TEMPLATE_ID = 'template_o3hqe4h';  // ← اپنا ڈالیں
const PUBLIC_KEY  = 'y4zZsFn_KDtk18Jdx';        // ← اپنا ڈالیں

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: '💼',
    label: 'GitHub',
    value: personalInfo.github.replace('https://', ''),
    href: personalInfo.github,
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: personalInfo.linkedin.replace('https://', ''),
    href: personalInfo.linkedin,
  },
  {
    icon: '📍',
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
        },
        PUBLIC_KEY
      );

      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);

    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>

        {/* Header */}
        <AnimateOnScroll variant="fadeUp">
          <div className={styles.header}>
            <span className={styles.tag}>Contact Me</span>
            <h2 className={styles.title}>
              Get In <span>Touch</span>
            </h2>
            <p className={styles.subtitle}>
              Have a project in mind or want to collaborate?
              Feel free to reach out — I would love to hear from you.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Content */}
        <div className={styles.content}>

          {/* Left: Info */}
          <AnimateOnScroll variant="fadeLeft" delay={0.1}>
            <div className={styles.infoSide}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>
                  Let&apos;s work together
                </h3>
                <p className={styles.infoText}>
                  I am available for freelance projects and open
                  to full-time opportunities. Whether you need a
                  website, mobile app, or full stack solution —
                  let&apos;s build something great together.
                </p>

                <div className={styles.contactItems}>
                  {contactInfo.map((item) => (
                    <div key={item.label} className={styles.contactItem}>
                      <div className={styles.contactIcon}>
                        {item.icon}
                      </div>
                      <div className={styles.contactDetail}>
                        <span className={styles.contactLabel}>
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http')
                              ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={styles.contactValue}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className={styles.contactValuePlain}>
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.availability}>
                  <span className={styles.availDot} />
                  <span className={styles.availText}>
                    Currently available for freelance work
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Form */}
          <AnimateOnScroll variant="fadeRight" delay={0.2}>
            <div className={styles.formSide}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send a Message</h3>

                <form onSubmit={handleSubmit} className={styles.form}>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="email">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      className={styles.input}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={styles.textarea}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' && '⏳ Sending...'}
                    {status === 'sent'    && '✅ Message Sent!'}
                    {status === 'error'   && '❌ Try Again'}
                    {status === 'idle'    && '🚀 Send Message'}
                  </button>

                  {status === 'sent' && (
                    <p className={styles.successMsg}>
                      Thank you! I will get back to you soon.
                    </p>
                  )}

                  {status === 'error' && (
                    <p className={styles.errorMsg}>
                      Something went wrong. Please try again.
                    </p>
                  )}

                </form>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}