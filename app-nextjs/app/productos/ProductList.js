import products from '@/data/products'
import ProductCard from './ProductCard'

products.map(prod => console.log(prod.category))

const ProductList = ({ category }) => {
  console.log(category)
  const items = category === 'Todos' ? products : products.filter(item => item.category === category)

  return (
    <section className='container m-auto mt-5 flex justify-center items-center gap-12 flex-wrap'>
      {
        items.map(item => <ProductCard key={item.slug} item={item} /> )
      }
    </section>
  )
}

export default ProductList