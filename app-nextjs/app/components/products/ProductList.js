import products from '@/data/products'
import ProductCard from './ProductCard'

const ProductList = ({ categoria }) => {

  const items = categoria === 'todos' ? products : products.filter(item => item.category === categoria)

  return (
    <section className='container m-auto flex justify-center items-center gap-12 flex-wrap'>
      {
        items.map(item => <ProductCard key={item.slug} item={item} /> )
      }
    </section>
  )
}

export default ProductList