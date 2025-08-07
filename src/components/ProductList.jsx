import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import products from '../data/products'
import { CartContext } from '../context/CartContext'

function ProductList() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const categoryFilter = params.get('category')

  const [searchTerm, setSearchTerm] = useState('')
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const { addToCart } = useContext(CartContext)

  const filteredProducts = products
    .filter(p => (categoryFilter && categoryFilter !== 'All' ? p.category === categoryFilter : true))
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const productCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  }

  const productCardHover = {
    transform: 'scale(1.05)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  }

  const buttonStyle = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }

  return (
    <div style={{ padding: '1rem', fontFamily: 'Roboto, sans-serif' }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          padding: '0.5rem',
          marginBottom: '1rem',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '1rem',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          padding: '0 1rem',
        }}
      >
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{
              ...productCardStyle,
              ...(hoveredProduct === product.id ? productCardHover : {}),
            }}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  marginBottom: '0.5rem',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <h2>{product.name}</h2>
            </Link>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
            <button
              style={buttonStyle}
              onMouseEnter={e => (e.target.style.backgroundColor = '#0056b3')}
              onMouseLeave={e => (e.target.style.backgroundColor = '#007bff')}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
