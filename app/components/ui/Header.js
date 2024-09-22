'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
  {
    label: 'Inicio', href: '/'
  },
  {
    label: 'Nosotros', href: '/nosotros'
  },
  {
    label: 'Contacto', href: '/contacto'
  }
]

export const Header = () => {

  const pathname = usePathname()

  return (
    <header className='w-full bg-gray-600'>
      <div className="container m-auto py-6 flex justify-between items-center">
        <p className='text-4xl text-bold text-slate-100'>Coderhouse</p>
        <nav className='flex justify-between gap-2'>
          {
            links.map(link => (
              <Link 
                href={link.href} 
                key={link.label} 
                className={`${pathname === link.href ? 'font-bold' : ''} text-slate-100 p-3 text-base`}
              >
                {link.label}
              </Link>
            ))
          }
        </nav>
      </div>
    </header>
  )
}
