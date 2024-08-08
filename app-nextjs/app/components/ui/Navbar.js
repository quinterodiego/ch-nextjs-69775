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
        <Menu />
      </div>      
    </div>
  )
}
