import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Mall from './pages/Mall';
import FaithPage from './pages/FaithPage';
import Cart from './pages/Cart'; // Import the new Cart page
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mall" element={<Mall />} />
        <Route path="/shop/:faith" element={<FaithPage />} />
        <Route path="/cart" element={<Cart />} /> {/* New Route */}
      </Routes>
    </Layout>
  );
}

export default App;