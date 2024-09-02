'use client'
import ProductList from './productos/ProductList.js';
import { useEffect, useState, Suspense } from 'react';

const categories = [
  { name: "Todos"},
  { name: "Compacto"},
  { name: "Full-Size"},
  { name: "Tenkeyless"},
  { name: "Ultradelgado"},
  { name: "Personalizable"}
]

const Home = () => {

  const [selected, setSelected] = useState('')
  const [products, setproducts] = useState([])
  const [categoryIndex, setCategoryIndex] = useState(0)

  const getProdyctByCategory =  async(category) => {
    const data = await fetch(`http://localhost:3000/api/productos/${category}`)
    const products = await data.json()
    setproducts(products)
  }

  useEffect(() => {
    selected === '' ? getProdyctByCategory('Todos') : getProdyctByCategory(selected)
  }, [selected])

  const onSelectCategory = (category, index) => {
    getProdyctByCategory(category)
    setSelected(category)
    setCategoryIndex(index)
  }
  
  return (
    <main className='w-full flex justify-between p-3'>
      <aside className='px-6'>
        <h3 className='text-xl pb-2'>Categorias</h3>
        <ul>
          {categories.map((category, index) => <li className={`cursor-pointer py-1 hover:opacity-75 ${categoryIndex === index ? 'text-blue-400' : ''}`} onClick={() => onSelectCategory(category.name, index)}>{category.name}</li>)}
        </ul>
      </aside>
      <Suspense fallback={<div>Cargando...</div>}>
        <ProductList products={products} />
      </Suspense>
    </main>
  );
}

export default Home