import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null); // FIX 1: Add state for Order ID

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call / Payment delay
    setTimeout(() => {
      // FIX 2: Generate the ID only once when the order succeeds
      const newOrderId = Math.floor(Math.random() * 100000);
      setOrderId(newOrderId);
      
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart(); 
      window.scrollTo(0, 0);
    }, 2000);
  };

  // 1. SUCCESS VIEW (After placing order)
  if (isSuccess) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center', minHeight: '60vh' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h1 className="section-title">Order Confirmed!</h1>
        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '1rem auto' }}>
          Thank you for trusting Sacred Ties. Your blessings are being packaged with care and will reach you soon.
        </p>
        <div style={{ background: '#f9f9f9', padding: '1rem', display: 'inline-block', borderRadius: '8px', marginTop: '1rem' }}>
            {/* FIX 3: Use the stored state variable */}
            <strong>Order ID:</strong> #ST-{orderId}
        </div>
        <br />
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Return Home
        </Link>
      </div>
    );
  }

  // 2. EMPTY CART REDIRECT
  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <Link to="/mall" className="btn btn-primary" style={{ marginTop: '1rem' }}>Browse Shop</Link>
      </div>
    );
  }

  // 3. CHECKOUT FORM VIEW
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 className="section-title">Checkout</h1>

      <div className="checkout-layout" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        
        {/* --- LEFT: SHIPPING FORM --- */}
        <div style={{ flex: 2, minWidth: '300px' }}>
          <form id="checkout-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Contact Info */}
            <div className="form-section">
              <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '1rem', fontFamily: 'Cinzel, serif' }}>Shipping Details</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input required type="text" className="form-input" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input required type="email" className="form-input" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input required type="text" className="form-input" placeholder="123 Sacred Lane" />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="form-group" style={{ flex: 1 }}>
                    <label>City</label>
                    <input required type="text" className="form-input" placeholder="New York" />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                    <label>Zip Code</label>
                    <input required type="text" className="form-input" placeholder="10001" />
                </div>
              </div>
            </div>

            {/* Payment Info (Mock) */}
            <div className="form-section">
               <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '1rem', fontFamily: 'Cinzel, serif' }}>Payment</h3>
               <div className="form-group">
                 <label>Card Number</label>
                 <input required type="text" className="form-input" placeholder="0000 0000 0000 0000" />
               </div>
               <div style={{ display: 'flex', gap: '1rem' }}>
                 <div className="form-group" style={{ flex: 1 }}>
                     <label>Expiry</label>
                     <input required type="text" className="form-input" placeholder="MM/YY" />
                 </div>
                 <div className="form-group" style={{ flex: 1 }}>
                     <label>CVV</label>
                     <input required type="text" className="form-input" placeholder="123" />
                 </div>
               </div>
            </div>

          </form>
        </div>

        {/* --- RIGHT: ORDER SUMMARY --- */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '12px', border: '1px solid #eee' }}>
            <h3 style={{ fontFamily: 'Cinzel, serif', marginBottom: '1.5rem' }}>Order Summary</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>{item.name} <span style={{color:'#777'}}>x {item.quantity}</span></span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '1rem 0' }} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>

            <button 
                type="submit" 
                form="checkout-form"
                disabled={isProcessing}
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '2rem', padding: '15px' }}
            >
              {isProcessing ? 'Processing...' : `Pay $${totalPrice}`}
            </button>

            <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '1rem', textAlign: 'center' }}>
              🔒 Secure SSL Encrypted Payment
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}