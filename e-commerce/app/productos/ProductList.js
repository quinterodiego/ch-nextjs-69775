import ProductCard from './ProductCard'

const ProductList = ({products}) => {

  return (
    <section className='container m-auto mt-5 flex justify-center items-center gap-5 flex-wrap'>
      {
        products.map(item => <ProductCard key={item.slug} item={item} /> )
      }
    </section>
  )
}

export default ProductList