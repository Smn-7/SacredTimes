import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // UPDATED: Import the hook

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart(); // UPDATED: Get cart data

  // 1. EMPTY STATE
  if (cartItems.length === 0) {
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

  // 2. FILLED CART STATE
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 className="section-title">Your Shopping Bag</h1>
      
      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* List of Items */}
        {cartItems.map((item) => (
          <div key={item.id} style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            alignItems: 'center',
            flexWrap: 'wrap' // Responsive safety
          }}>
            {/* Image */}
            <Link to={`/product/${item.id}`}>
                <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} 
                />
            </Link>
            
            {/* Details */}
            <div style={{ flex: 1, minWidth: '150px' }}>
              <Link to={`/product/${item.id}`}>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', color: '#1A237E' }}>{item.name}</h3>
              </Link>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>Qty: {item.quantity}</p>
            </div>

            {/* Price & Actions */}
            <div style={{ textAlign: 'right', minWidth: '80px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${item.price * item.quantity}</p>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#d32f2f', 
                    cursor: 'pointer', 
                    fontSize: '0.8rem', 
                    marginTop: '5px',
                    textDecoration: 'underline'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Total & Checkout Section */}
        <div style={{ 
          marginTop: '2rem', 
          borderTop: '1px solid #ddd', 
          paddingTop: '1.5rem', 
          textAlign: 'right' 
        }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', marginBottom: '1rem' }}>
            Total: <span style={{ color: '#1A237E' }}>${totalPrice}</span>
          </h2>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
   <Link to="/mall" className="btn" style={{ border: '1px solid #ccc', color: '#555' }}>
      Continue Shopping
   </Link>
   
   {/* UPDATED: Changed button to Link */}
   <Link to="/checkout" className="btn btn-primary" style={{ padding: '12px 40px' }}>
      Checkout Now
   </Link>
</div>
        </div>

      </div>
    </div>
  );
}