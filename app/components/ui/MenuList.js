import Link from 'next/link'
import React from 'react'

export const MenuList = ({ open, handleClose}) => {
  return (
    <div className={`${open ? 'opacity-100 visible' : 'opacity-0 invisible' } transition-all fixed inset-0 bg-black/50 flex justify-end`}>
      <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-500`}>
        <div onClick={handleClose} className='text-white text-right p-4 cursor-pointer'>
          X
        </div>
        <nav className='flex mt-4 flex-col gap-3 px-3'>
          <Link href="/" className='text-white p-2'>Inicio</Link>
          <Link href="/nosotros" className='text-white p-2'>Nosotros</Link>
          <Link href="/contacto" className='text-white p-2'>Contacto</Link>
        </nav>
      </aside>
    </div>
  )
}
