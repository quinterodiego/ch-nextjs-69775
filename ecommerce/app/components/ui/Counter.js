'use client'
import React, { useState } from 'react'
import { Boton } from './Button'

export const Counter = () => {

  const [counter, setCounter] = useState(1)

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }

  return (
    <div className='flex justify-center items-center gap-3'>
      <Boton onClick={decrease}>-</Boton>
      <p>{counter}</p>
      <Boton onClick={increase}>+</Boton>
    </div>
  )
}
