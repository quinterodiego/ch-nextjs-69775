'use client'
const { createContext, useState, useContext, useEffect } = require("react");

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    console.log(cart)
  }, [cart])
  
  const addToCart = (e, item) => {
    console.log(item)
    e.preventDefault()
    setCart([...CartContext, item])
  }

  return <CartContext.Provider value={{ cart, addToCart }}>
    {children}
  </CartContext.Provider>
}

export const useCartContext = () =>  useContext(CartContext)