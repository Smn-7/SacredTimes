import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Mall from './pages/Mall';
import FaithPage from './pages/FaithPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail'; // Import new page
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mall" element={<Mall />} />
        <Route path="/shop/:faith" element={<FaithPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* New Route */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Layout>
  );
}

export default App;