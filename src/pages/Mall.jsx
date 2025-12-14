import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allProducts, faiths } from '../data';

export default function Mall() {
  const [searchParams] = useSearchParams();

  // 1. Initialize State Lazily (Reads URL immediately on first render)
  // This prevents the need for an initial useEffect just to set this
  const [selectedFaiths, setSelectedFaiths] = useState(() => {
    const faithParam = searchParams.get('faith');
    return faithParam ? [faithParam] : [];
  });

  const [sortOption, setSortOption] = useState('newest');

  // 2. LISTEN FOR URL CHANGES (Navigation Updates)
  // If the user hits "Back" or navigates here, sync the state.
  useEffect(() => {
    const faithParam = searchParams.get('faith');
    if (faithParam) {
      // Only set state if it's different to avoid loops
      setSelectedFaiths((prev) => 
        prev.includes(faithParam) ? prev : [faithParam]
      );
    }
  }, [searchParams]);

  // 3. DERIVED STATE (Replaces the problematic useEffect)
  // We calculate 'filteredProducts' on the fly. useMemo ensures it only
  // recalculates when dependencies change.
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by Faith
    if (selectedFaiths.length > 0) {
      result = result.filter(p => selectedFaiths.includes(p.faithId));
    }

    // Sort Logic
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
  }, [selectedFaiths, sortOption]); // Dependencies

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
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} />
                  {product.discount > 0 && (
                    <span className="discount-badge">-{product.discount}%</span>
                  )}
                  {product.isNew && (
                    <span className="new-badge">New</span>
                  )}
                </div>
                <div className="product-content">
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="price">${product.price}</span>
                        <span style={{ color: '#FFD700' }}>★ {product.rating}</span>
                    </div>
                  </div>
                  <button className="btn btn-dark" style={{ marginTop: 'auto', width: '100%' }}>
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