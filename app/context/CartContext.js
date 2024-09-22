'use client'
const { createContext, useState, useContext, useEffect } = require("react");

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    console.log(cart)
  }, [cart])
  
  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const deleteToCart = (slug) => {
    const newCart = cart.filter(item => item.slug.trim() !== slug.trim())
    setCart(newCart)
  }

  return <CartContext.Provider value={{ cart, addToCart, deleteToCart }}>
    {children}
  </CartContext.Provider>
}

export const useCartContext = () =>  useContext(CartContext)