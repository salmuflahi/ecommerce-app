import { useNavigate } from 'react-router-dom'

const categories = ["All", "Shirts", "Hoodies", "Pants", "Shoes", "Accessories"]

function Categories() {
  const navigate = useNavigate()

  function handleClick(category) {
    if (category === "All") {
      navigate("/")
    } else {
      navigate(`/?category=${category}`)
    }
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Categories</h2>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          style={{
            marginRight: "0.5rem",
            marginBottom: "0.5rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px solid #007bff",
            backgroundColor: "#fff",
            color: "#007bff",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#007bff', e.target.style.color = '#fff')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#fff', e.target.style.color = '#007bff')}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default Categories
