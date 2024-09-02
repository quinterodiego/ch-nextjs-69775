import React from 'react'

export const Button = ({ children, className='', ...args }) => {
  return (
    <button className={`rounded-lg bg-blue-300 text-center text-white ${className}`} {...args}>
      {children}
    </button>
  )
}
