import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export const metadata = {
  title: 'Rizwan Ahmad – Full Stack & Mobile App Developer',
  description: 'Portfolio of Rizwan Ahmad, a Full Stack and Mobile App Developer from Pakistan specializing in React, Next.js, and React Native.',
  keywords: ['Rizwan Ahmad', 'Full Stack Developer', 'React', 'Next.js', 'React Native', 'Pakistan'],
  authors: [{ name: 'Rizwan Ahmad' }],
  openGraph: {
    title: 'Rizwan Ahmad – Full Stack Developer',
    description: 'Portfolio of Rizwan Ahmad',
    type: 'website',
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