'use client'
import { useParams } from 'next/navigation'
import products from '@/data/products'
import { useCartContext } from '@/app/context/CartContext'

const Detalle = () => {

  const { addToCart } = useCartContext()

  const { producto } = useParams()

  const product = products.find(prod => prod.slug === producto)

  return (
    <div className="bg-white">
      <div className="">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-full sm:px-6 lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          {
            product.url.map(prod => (
              <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
                <img
                  alt={product.title}
                  src={prod}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))
          }
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Información del Producto</h2>
            <p className="text-3xl tracking-tight text-gray-900">Precio: ${product.price}</p>
            <button
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-400 px-8 py-3 text-base font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => addToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detalle