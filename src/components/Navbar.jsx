import { Link, useLocation } from 'react-router-dom';
import { faiths } from '../data';

export default function Navbar() {
  const location = useLocation();

  // 1. Find active faith based on current path to set color
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
      <div className="logo">
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Cinzel, serif', color: '#fff' }}>
          SACRED TIES
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/mall" style={{ fontWeight: 'bold', color: '#FFD700' }}>MALL</Link> 
        {faiths.map(f => (
            <Link key={f.id} to={`/shop/${f.id}`} style={{ textTransform: 'capitalize' }}>
                {f.name}
            </Link>
        ))}
      </nav>

      {/* Icons Section */}
      <div style={{ display: 'flex', gap: '20px', fontSize: '1.2rem', alignItems: 'center' }}>
        
        {/* Search -> Goes to Mall */}
        <Link to="/mall" title="Search Products" style={{ color: 'white' }}>
            <span style={{ cursor: 'pointer' }}>🔍</span>
        </Link>
        
        {/* Store -> Goes to Mall */}
        <Link to="/mall" title="Browse Store" style={{ color: 'white' }}>
            <span style={{ cursor: 'pointer' }}>🏪</span>
        </Link>
        
        {/* Bag -> Goes to Cart Page */}
        <Link to="/cart" title="View Cart" style={{ color: 'white' }}>
            <span style={{ cursor: 'pointer' }}>🛍️</span>
        </Link>
      </div>
    </header>
  );
}