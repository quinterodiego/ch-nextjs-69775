'use client'
import { collection, getDocs, query, where } from 'firebase/firestore';
import ProductList from './productos/ProductList.js';
import { useEffect, useState, Suspense } from 'react';
import { db } from './config/firebase.js';

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
    try {
      const productRef = collection(db, 'products')
      let q
      if(category.toLowerCase() === 'todos') {
        q = query(productRef)
      } else {
        q = query(productRef, where('category', '==', category))
      }
      const querySnapshots = await getDocs(q)
      const docs = querySnapshots.docs.map(doc => doc.data())
      console.log('docs', docs)
      setproducts(docs)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    selected === '' ? getProdyctByCategory('Todos') : getProdyctByCategory(selected)
  }, [selected])

  const onSelectCategory = (category, index) => {
    console.log(category, index)
    getProdyctByCategory(category)
    setSelected(category)
    setCategoryIndex(index)
  }
  
  return (
    <main className='w-full flex justify-between p-3'>
      <aside className='px-6'>
        <h3 className='text-xl pb-2'>Categorias</h3>
        <ul>
          {categories.map((category, index) => <li key={index} className={`cursor-pointer py-1 hover:opacity-75 ${categoryIndex === index ? 'text-blue-400' : ''}`} onClick={() => onSelectCategory(category.name, index)}>{category.name}</li>)}
        </ul>
      </aside>
      <Suspense fallback={<div>Cargando...</div>}>
        <ProductList products={products} />
      </Suspense>
    </main>
  );
}

export default Home