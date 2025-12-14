import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#1A237E', fontFamily: 'Playfair Display', fontSize: '3rem', marginBottom: '1rem' }}>Our Story</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          In a rapidly changing world, the quiet beauty of tradition is often lost. Sacred Ties was born from a desire to revive the artistry behind religious artifacts.
        </p>
        <img src="https://images.unsplash.com/photo-1610996885828-09594f87a324?q=80&w=800" alt="Weaving" style={{ width: '100%', borderRadius: '10px' }} />
      </div>
    </Layout>
  );
}