'use client'
const { createContext, useState, useContext, useEffect } = require("react");

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [productsQuantity, setProductsQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    console.log(cart)
  }, [cart])
  
  const addToCart = (item) => {
    console.log('add item', item)
    setCart([...cart, item])
    console.log('cart', cart)
    setProductsQuantity(productsQuantity + 1)
  }

  cart.map(item => setTotalPrice(totalPrice * item.price))

  return <CartContext.Provider value={{ cart, addToCart, productsQuantity, totalPrice }}>
    {children}
  </CartContext.Provider>
}

export const useCartContext = () =>  useContext(CartContext)