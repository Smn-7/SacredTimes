import { Link } from 'react-router-dom';
import { faiths } from '../data';

export default function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="hero">
        <div className="hero-text">
          <h1>Preserving the Soul of Tradition</h1>
          <p>
            We are custodians of ancient crafts and sacred threads that bind
            generations together. Explore our curated marketplace where every thread tells a story.
          </p>
          
          {/* UPDATED: Added 'hero-buttons' class for mobile centering */}
          <div className="hero-buttons" style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginTop: '2rem', 
            flexWrap: 'wrap'
          }}>
            <Link to="/mall" className="btn btn-primary">
              Explore Collections
            </Link>
            
            <Link to="/signup" className="btn" style={{ 
                background: 'transparent', 
                border: '2px solid #222', 
                color: '#222',
                fontWeight: '600',
                whiteSpace: 'nowrap'
            }}>
              Join Community
            </Link>
          </div>

        </div>
        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800"
            alt="Artisan Hands"
          />
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="container story-section">
        <h2 className="section-title">Our Story</h2>
        <div className="story-content">
            <p>
                Sacred Ties was born from a simple promise: to keep the flame of tradition alive. 
                In a world of mass production, we travel to the narrow alleys of Varanasi, the hills of Bethlehem, 
                and the workshops of Amritsar to find artisans who still create with their hands and hearts.
            </p>
            <blockquote className="story-quote">
                &quot;We do not just sell products; we deliver lineage, history, and blessings to your doorstep.&quot;
            </blockquote>
        </div>
      </section>

      {/* --- FAITH SECTIONS (Zig-Zag Layout) --- */}
      <div id="shop-section">
        <h2 className="section-title" style={{ marginTop: '2rem' }}>Shop by Tradition</h2>
        
        <div className="faith-list">
          {faiths.map((faith, index) => (
            <section 
                key={faith.id} 
                className={`faith-section ${index % 2 === 1 ? 'reverse-layout' : ''}`}
                style={{ borderLeft: `6px solid ${faith.color}` }}
            >
              {/* Image Side */}
              <div className="faith-image-container">
                <img src={faith.heroImage} alt={faith.name} />
                <div className="faith-overlay" style={{ background: faith.color }}></div>
              </div>

              {/* Text Side */}
              <div className="faith-content">
                <span className="faith-label" style={{ color: faith.color }}>The {faith.name} Collection</span>
                <h3>{faith.name}</h3>
                <p>{faith.subtitle}</p>
                <p className="faith-desc">
                    Discover handcrafted artifacts, prayer essentials, and sacred textiles 
                    sourced directly from the heart of {faith.name} heritage sites.
                </p>
                
                <Link to={`/shop/${faith.id}`} className="btn btn-outline" style={{ borderColor: faith.color, color: faith.color }}>
                  View Collection
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}