import { useParams, Link } from 'react-router-dom';
import { faiths } from '../data';

export default function FaithPage() {
  const { faith } = useParams(); 

  const pageData = faiths.find((f) => f.id === faith);

  if (!pageData) {
    return (
      <div className="container" style={{ padding: '5rem', textAlign: 'center' }}>
        <h2>Loading Tradition...</h2>
      </div>
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1 style={{ color: pageData.color }}>{pageData.name} Collection</h1>
          <p>{pageData.subtitle}</p>
          <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
            Collection ID: {pageData.id.toUpperCase()}
          </div>
        </div>
        <div className="hero-img">
          <img src={pageData.heroImage} alt={pageData.name} />
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="container products-section">
        <h2 className="section-title">Featured Items</h2>
        <div className="product-grid">
          {pageData.products.slice(0, 3).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
                {product.isNew && <span className="product-badge" style={{ backgroundColor: pageData.color }}>New</span>}
                {product.discount > 0 && <span className="discount-badge">-{product.discount}%</span>}
              </div>
              <div className="product-content">
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="price">${product.price}</span>
                    <span style={{ color: '#ffb400' }}>★ {product.rating}</span>
                  </div>
                </div>
                <button className="btn btn-add-cart" style={{ backgroundColor: pageData.color }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* SHOW MORE LINK */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link 
                to={`/mall?faith=${pageData.id}`} 
                className="btn"
                style={{ 
                    border: `2px solid ${pageData.color}`, 
                    color: pageData.color, 
                    fontWeight: 'bold',
                    padding: '12px 40px',
                    backgroundColor: 'transparent'
                }}
            >
                View Full {pageData.name} Collection &rarr;
            </Link>
        </div>
      </section>
      
      {/* FACTS SECTION */}
      <section className="fact-section" style={{ backgroundColor: pageData.color }}>
        <div className="container">
            <h2>Did You Know?</h2>
            <div className="fact-box"><p>{pageData.fact}</p></div>
        </div>
      </section>
    </>
  );
}