import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* sections یہاں آئیں گے */}
        <div style={{ minHeight: '100vh', paddingTop: '70px' }}>
          <p style={{ textAlign: 'center', paddingTop: '2rem', color: 'var(--text-2)' }}>
            Sections coming soon...
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}