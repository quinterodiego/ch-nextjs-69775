'use client'

import { db } from '@/app/config/firebase'
import { useCartContext } from '@/app/context/CartContext'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import React, { useState } from 'react'

const createOrder = async (values, items) => {
  const order = {
    client: values,
    items: items.map(item => ({
      title: item.title,
      price: item.price,
      slug: item.slug,
      quantity: item.quantity
    })),
    date: new Date().toISOString()
  }

  const docId = Timestamp.fromDate(new Date()).toMillis()
  const orderRef = doc(db, 'orders', String(docId))
  await setDoc(orderRef, order)

  return docId
}

const ClientForm = () => {

  const { cart } = useCartContext()
  const [values, setValues] = useState({
    email: '',
    direccion: '',
    nombre: ''
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await createOrder(values, cart)
    console.log(result)
  }

  return (
    
    <form onSubmit={handleSubmit} className='my-12 flex flex-col'>
      <input 
        type="text"
        required
        placeholder='Tu nombre'
        className='p-2 rounded w-1/2 border border-blue-100 blok my-4'
        name='name'
        onChange={handleChange} 
      />
      <input 
        type="text"
        required
        placeholder='Tu dirección'
        className='p-2 rounded w-1/2 border border-blue-100 blok my-4'
        name='direccion'
        onChange={handleChange} 
      />
      <input 
        type="text"
        required
        placeholder='Tu email'
        className='p-2 rounded w-1/2 border border-blue-100 blok my-4'
        name='email'
        onChange={handleChange} 
      />
      <button type='submit'>Terminar mi compra</button>
    </form>
  )
}

export default ClientForm