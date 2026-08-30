import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      fontFamily: 'Inter, sans-serif',
      background: 'var(--bg)',
      color: 'var(--text-1)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
        Page Not Found
      </h2>
      <p style={{ color: 'var(--text-2)', maxWidth: '400px' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" style={{
        marginTop: '1rem',
        padding: '0.75rem 1.5rem',
        background: 'var(--primary)',
        color: '#fff',
        borderRadius: '10px',
        fontWeight: 600,
        textDecoration: 'none',
      }}>
        Back to Home
      </Link>
    </div>
  );
}