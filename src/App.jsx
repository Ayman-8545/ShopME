import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        )
      }
      return [...prev, { ...product, qty }]
    })
  }

  const updateQty = (id, qty) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)))
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail onAddToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onUpdateQty={updateQty} onRemove={removeFromCart} />}
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}
