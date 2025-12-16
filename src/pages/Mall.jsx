import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { allProducts, faiths } from '../data';
import { useCart } from '../context/CartContext'; // UPDATED: Import the hook

export default function Mall() {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart(); // UPDATED: Get the add function

  // 1. Initialize State Lazily
  const [selectedFaiths, setSelectedFaiths] = useState(() => {
    const faithParam = searchParams.get('faith');
    return faithParam ? [faithParam] : [];
  });

  const [sortOption, setSortOption] = useState('newest');

  // 2. Sync with URL changes
  useEffect(() => {
    const faithParam = searchParams.get('faith');
    if (faithParam) {
      setSelectedFaiths((prev) => 
        prev.includes(faithParam) ? prev : [faithParam]
      );
    }
  }, [searchParams]);

  // 3. Filter & Sort Logic (Memoized)
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter
    if (selectedFaiths.length > 0) {
      result = result.filter(p => selectedFaiths.includes(p.faithId));
    }

    // Sort
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'discount') {
      result.sort((a, b) => b.discount - a.discount);
    } else if (sortOption === 'newest') {
      result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    }

    return result;
  }, [selectedFaiths, sortOption]);

  // --- HANDLERS ---
  const toggleFaith = (faithId) => {
    if (selectedFaiths.includes(faithId)) {
      setSelectedFaiths(selectedFaiths.filter(id => id !== faithId));
    } else {
      setSelectedFaiths([...selectedFaiths, faithId]);
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* HEADER */}
      <div style={{ textAlign: 'center' }}>
        <h1 className="section-title">The Grand Mall</h1>
        <p>Explore sacred artifacts from all traditions in one place.</p>
      </div>

      <div className="mall-layout">
        
        {/* --- LEFT: FILTERS --- */}
        <aside className="filters-sidebar">
          <h3>Filter & Sort</h3>
          
          {/* Faith Filter */}
          <div className="filter-group">
            <h4>Tradition</h4>
            {faiths.map(f => (
              <label key={f.id} className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={selectedFaiths.includes(f.id)} 
                  onChange={() => toggleFaith(f.id)}
                />
                <span style={{ color: f.color, fontWeight: 'bold' }}>{f.name}</span>
              </label>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="filter-group">
            <h4>Sort By</h4>
            <select 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
              className="sort-select"
            >
              <option value="newest">Fresh Arrivals</option>
              <option value="rating">Highest Rating</option>
              <option value="discount">Max Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </aside>

        {/* --- RIGHT: PRODUCT GRID --- */}
        <div className="product-grid-area">
          <p style={{ marginBottom: '1rem', color: '#666' }}>Showing {filteredProducts.length} items</p>
          
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                
                {/* Link to Product Detail Page (Image) */}
                <Link to={`/product/${product.id}`} className="product-img-wrapper">
                  <img src={product.image} alt={product.name} />
                  {product.discount > 0 && (
                    <span className="discount-badge">-{product.discount}%</span>
                  )}
                  {product.isNew && (
                    <span className="new-badge">New</span>
                  )}
                </Link>

                <div className="product-content">
                  <div className="product-info">
                    {/* Link to Product Detail Page (Title) */}
                    <Link to={`/product/${product.id}`}>
                        <h3>{product.name}</h3>
                    </Link>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="price">${product.price}</span>
                        <span style={{ color: '#FFD700' }}>★ {product.rating}</span>
                    </div>
                  </div>
                  
                  {/* UPDATED: Add to Cart Button */}
                  <button 
                    className="btn btn-dark" 
                    style={{ marginTop: 'auto', width: '100%' }}
                    onClick={() => addToCart(product)} // Triggers the context action
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div style={{ padding: '2rem', textAlign: 'center', background: '#f9f9f9' }}>
                <h3>No products found matching your filters.</h3>
                <button className="btn btn-primary" onClick={() => setSelectedFaiths([])}>Clear Filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}