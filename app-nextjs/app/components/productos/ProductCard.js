import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({ item }) => {

  return (
    <article className='basis-72 shadow-lg rounded'>
      <Link href={`/productos/${item.slug}`} className='flex flex-col'>
        <Image 
          alt={item.title}
          src={item.url[0]}
          width={288}
          height={288}
          style={{ objectFit: 'contain' }}
        />
        <div className='px-4 border-t border-gray-200'>
          <h2 className='text-xl my-4'>{item.title}</h2>
          <p className='font-bold text-blue-400'>{item.category}</p>
          <p className='text-lg text-right font-semibold mb-6'>${item.price}</p>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard