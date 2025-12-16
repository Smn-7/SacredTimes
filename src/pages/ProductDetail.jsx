import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data';
import { useCart } from '../context/CartContext'; // UPDATED: Import the hook

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // UPDATED: Get the add function
  
  // Find the product that matches the URL ID
  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '5rem', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/mall" className="btn btn-primary" style={{ marginTop: '1rem' }}>Return to Mall</Link>
      </div>
    );
  }

  return (
    <div className="container product-detail-page" style={{ padding: '4rem 1.5rem' }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: '2rem', fontSize: '0.9rem', color: '#666' }}>
        <Link to="/">Home</Link> &gt; <Link to="/mall">Mall</Link> &gt; <span style={{ color: '#1A237E', fontWeight: 'bold' }}>{product.name}</span>
      </div>

      <div className="detail-layout" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        
        {/* LEFT: Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              width: '100%', 
              borderRadius: '12px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
            }} 
          />
        </div>

        {/* RIGHT: Info */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          
          {/* Header */}
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.5rem', marginBottom: '0.5rem', color: '#1A237E' }}>
            {product.name}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C79F5E' }}>
              ${product.price}
            </span>
            <span style={{ color: '#FFD700', fontSize: '1.1rem' }}>
              {'★'.repeat(Math.floor(product.rating))} ({product.rating})
            </span>
            {product.isNew && <span className="new-badge" style={{ position: 'static' }}>New Arrival</span>}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: '2rem' }} />

          {/* Description */}
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Artifact Story</h3>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '2.5rem' }}>
            {product.description}
          </p>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            
            {/* UPDATED: Add to Cart Button */}
            <button 
              className="btn btn-dark" 
              style={{ flex: 1, padding: '15px' }}
              onClick={() => addToCart(product)} // Triggers the context action
            >
              Add to Cart
            </button>
            
            <button className="btn" style={{ border: '2px solid #ddd', padding: '15px 20px', background: 'transparent', cursor: 'pointer' }}>
              ❤
            </button>
          </div>

          {/* Trust Badges */}
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', fontSize: '0.8rem', color: '#888' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>🛡️</span> Authentic Source
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>🚚</span> Worldwide Shipping
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
               <span>🙏</span> Blessed Item
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}