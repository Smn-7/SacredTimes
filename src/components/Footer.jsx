import React from 'react';
import { useLocation } from 'react-router-dom'; 
import { faiths } from '../data';

export default function Footer() {
  const location = useLocation();

  const activeFaith = faiths.find(f => location.pathname.includes(`/shop/${f.id}`));
  
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