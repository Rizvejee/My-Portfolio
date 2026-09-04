import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://rizwanahmad.dev'),
  title: {
    default: 'Rizwan Ahmad – Full Stack & Mobile App Developer',
    template: '%s – Rizwan Ahmad',
  },
  description: 'Portfolio of Rizwan Ahmad, a Full Stack and Mobile App Developer from Pakistan specializing in React, Next.js, and React Native.',
  keywords: [
    'Rizwan Ahmad',
    'Full Stack Developer',
    'Mobile App Developer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'Web Developer Pakistan',
    'Freelance Developer',
  ],
  authors: [{ name: 'Rizwan Ahmad', url: 'https://rizwanahmad.dev' }],
  creator: 'Rizwan Ahmad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rizwanahmad.dev',
    title: 'Rizwan Ahmad – Full Stack & Mobile App Developer',
    description: 'Portfolio of Rizwan Ahmad, a Full Stack and Mobile App Developer from Pakistan.',
    siteName: 'Rizwan Ahmad Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rizwan Ahmad – Full Stack & Mobile App Developer',
    description: 'Portfolio of Rizwan Ahmad, a Full Stack and Mobile App Developer from Pakistan.',
    creator: '@rizwanahmad',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}