import React from 'react';
import { useLocation } from 'react-router-dom'; // CHANGED: Replaces next/router
import { faiths } from '../data';

export default function Footer() {
  // CHANGED: Use 'useLocation' hook instead of 'useRouter'
  const location = useLocation();

  // 1. Detect current faith based on the URL path
  // location.pathname gives us the current URL (e.g., "/shop/hindu")
  const activeFaith = faiths.find(f => location.pathname.includes(`/shop/${f.id}`));
  
  // 2. Set Dynamic Color
  const footerColor = activeFaith ? activeFaith.color : '#1A237E';

  return (
    <footer 
      style={{ 
        backgroundColor: footerColor, 
        transition: 'background-color 0.5s ease',
        color: '#fff',
        textAlign: 'center',
        padding: '3rem 1rem',
        marginTop: 'auto'
      }}
    >
      <div className="footer-content">
        <h3 style={{ fontFamily: 'Cinzel, serif', marginBottom: '1rem' }}>Sacred Ties</h3>
        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Sacred Ties. Preserving the soul of tradition.
        </p>
      </div>
    </footer>
  );
}