'use client'
import React from 'react'
import Link from 'next/link'
import { useCartContext } from '../context/CartContext'

export default function Carrito() {

  const { cart, deleteToCart } = useCartContext()

  const totalPrice = cart.reduce((total, item) => {
      return total + item.price;
  }, 0);

  return (
    <>
      {
        cart.length === 0 ? 
        <div className='m-auto flex flex-col'>
          <h2 className='m-auto text-2xl'>Carrito vacío</h2>
          <Link href={'/'} className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-400 px-8 py-3 text-base font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            Ir a Productos
          </Link>
        </div> :
        <>
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h2>Datos del Carrito</h2>
            </div>
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.slug} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt={item.title}
                          src={item.url[0]}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              {item.title}
                            </h3>
                            <p className="ml-4">${item.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          {/* <p className="text-gray-500">Qty {item.quantity}</p> */}

                          <div className="flex">
                            <button type="button" className="font-medium text-red-500 hover:text-indigo-500" onClick={() =>  deleteToCart(item.slug)}>
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-75"
              >
                Comprar
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                ó{' '}
                <Link href={'/'} >
                  Continuar Comprando
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </>
      }
    </>
  )
}