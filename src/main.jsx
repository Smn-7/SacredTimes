import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'; // IMPORT THIS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* WRAP APP HERE */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)