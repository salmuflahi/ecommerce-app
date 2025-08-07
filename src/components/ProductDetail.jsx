import { useParams } from 'react-router-dom'
import products from '../data/products'

function ProductDetail() {
  const { productId } = useParams()  // get productId from URL params
  const product = products.find(p => p.id === parseInt(productId))

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <div style={{ padding: '1rem' }}>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Here you can add a description or more details about the product.</p>
    </div>
  )
}

export default ProductDetail
