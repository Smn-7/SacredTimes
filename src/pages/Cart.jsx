import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center', minHeight: '60vh' }}>
      <h1 className="section-title">Your Shopping Bag</h1>
      
      <div style={{ marginTop: '3rem', opacity: 0.6 }}>
        <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>🛍️</span>
        <h2>Your bag is currently empty.</h2>
        <p>Looks like you haven't discovered our sacred treasures yet.</p>
      </div>

      <Link 
        to="/mall" 
        className="btn btn-primary" 
        style={{ marginTop: '2rem', display: 'inline-block' }}
      >
        Start Shopping
      </Link>
    </div>
  );
}