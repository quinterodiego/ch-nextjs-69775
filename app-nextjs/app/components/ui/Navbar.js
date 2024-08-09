import Image from 'next/image'
import React from 'react'
import { Menu } from './Menu'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='w-full bg-gray-500'>
      <div className="container m-auto py-4 flex justify-between items-center">
        <Link href={'/'}>
          <div className="logo flex items-center gap-3">
            <Image src={'/keyboard.png'} alt='logo Dalmi' width={70} height={70} priority={true} />
            <div className="title text-white">
              <h1 className='text-2xl'>DALMI</h1>
              <h3 className='text-base italic'>Keyboards</h3>
            </div>
          </div>
        </Link>

        <div className='flex w-full justify-end pr-5'>
          <Link href={'/carrito'} className='hover:opacity-75'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </Link>
        </div>

        <Menu />
      </div>      
    </div>
  )
}
