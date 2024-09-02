import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full bg-gray-100 border-t mt-10'>
      <div className="container m-auto py-2 text-sm text-gray-700 flex justify-center items-center gap-3">
        <div className='flex items-center gap-2'>
          <p>Desarrollado por CODERFLIX</p>
          <Image src={'/coderflix-logo.png'} width={20} height={20} />
        </div>
        <p>- Todos los derechos reservadors &copy; 2024</p>
      </div>
    </footer>
  )
}
