'use client'
import { collection, getDocs, query, where } from 'firebase/firestore';
import ProductList from './components/ProductList.js';
import { useEffect, useState, Suspense } from 'react';
import { db } from './config/firebase.js';
import { Grid } from 'react-loader-spinner'

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
  const [isLoading, setIsLoading] = useState(true)
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
      setIsLoading(false)
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
      {
        isLoading ?
        <div className='w-full flex justify-center items-center'>
          <Grid
            visible={true}
            height="80"
            width="80"
            color="#60ADFB"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </div> :
        <ProductList products={products} />
      }
    </main>
  );
}

export default Home