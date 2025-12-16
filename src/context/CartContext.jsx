import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // 1. LOAD FROM LOCAL STORAGE ON START
  // We pass a function to useState to read from storage only once on initial render
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('sacred-ties-cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart", error);
      return [];
    }
  });

  // 2. SAVE TO LOCAL STORAGE ON CHANGE
  // Whenever 'cartItems' changes, we save it to the browser
  useEffect(() => {
    localStorage.setItem('sacred-ties-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add Item
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]); // This triggers the useEffect, which clears localStorage automatically
  };

  // Calculate Total
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}