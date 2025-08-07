import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext)

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return <h2 style={{ padding: '1rem' }}>Your cart is empty.</h2>
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price per item: ${item.price}</p>
          <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  )
}

export default Cart
