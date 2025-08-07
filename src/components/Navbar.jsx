import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          MyStore
        </Link>
      </div>
      <div>
        <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: 'black' }}>
          Home
        </Link>
        <Link to="/categories" style={{ marginRight: '1rem', textDecoration: 'none', color: 'black' }}>
          Categories
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
          Cart
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
