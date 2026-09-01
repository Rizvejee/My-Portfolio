import Navbar     from '@/components/layout/Navbar';
import Footer     from '@/components/layout/Footer';
import Hero       from '@/components/sections/Hero';
import About      from '@/components/sections/About';
import Skills     from '@/components/sections/Skills';
import Projects   from '@/components/sections/Projects';
import Services   from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
import Contact    from '@/components/sections/Contact';
import BackToTop  from '@/components/ui/BackToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}