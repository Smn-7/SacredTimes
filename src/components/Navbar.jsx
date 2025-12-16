import { Link, useLocation } from 'react-router-dom';
import { faiths } from '../data';
import { useCart } from '../context/CartContext'; // UPDATED: Import the hook

export default function Navbar() {
  const location = useLocation();
  const { cartItems } = useCart(); // UPDATED: Get cart data

  // 1. Detect if we are on a specific "Story Page" to set the color
  const activeFaith = faiths.find(f => location.pathname.includes(`/shop/${f.id}`));
  const headerColor = activeFaith ? activeFaith.color : '#1A237E';

  return (
    <header 
      style={{ 
        backgroundColor: headerColor, 
        transition: 'background-color 0.5s ease',
        color: '#fff',
        padding: '1rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      {/* --- LOGO --- */}
      <div className="logo">
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Cinzel, serif', color: '#fff' }}>
          SACRED TIES
        </Link>
      </div>

      {/* --- NAV LINKS --- */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/mall" style={{ fontWeight: 'bold', color: '#FFD700' }}>MALL</Link> 
        
        {/* Faith Links -> Redirect to Mall with Filter */}
        {faiths.map(f => (
            <Link key={f.id} to={`/mall?faith=${f.id}`} style={{ textTransform: 'capitalize' }}>
                {f.name}
            </Link>
        ))}
      </nav>

      {/* --- RIGHT ACTIONS (Auth & Cart) --- */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '1rem' }}>
        
        {/* Login Link */}
        <Link to="/login" style={{ color: 'white', fontWeight: '500' }}>
          Login
        </Link>

        {/* Signup Button */}
        <Link to="/signup" style={{ 
            border: '1px solid white', 
            padding: '6px 18px', 
            borderRadius: '20px',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: '0.3s'
        }}>
          Sign Up
        </Link>
        
        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.3)' }}></div>

        {/* UPDATED: Cart Icon with Badge */}
        <Link to="/cart" title="View Cart" style={{ color: 'white', fontSize: '1.3rem', position: 'relative' }}>
            <span style={{ cursor: 'pointer' }}>🛍️</span>
            
            {/* Show badge only if items exist */}
            {cartItems.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-10px',
                background: '#d32f2f', // Red alert color
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                minWidth: '18px',
                textAlign: 'center'
              }}>
                {cartItems.length}
              </span>
            )}
        </Link>

      </div>
    </header>
  );
}