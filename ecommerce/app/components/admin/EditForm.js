'use client'

import { doc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { useState } from "react"

const updateProduct = async (slug, values, file) => {
  let fileURL = values.url

  if(file) {
    const storageRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)
    fileURL = await getDownloadURL(fileSnapshot.ref)
  }

  const docRef = doc(db, 'products', slug)
  return updateProduct(docRef, {
    title: values.title,
    description: values.description,
    stock: Number(values.stock),
    price: Number(values.price),
    category: values.category,
    url: values.url
  }).then(() => console.log('Producto actualizado correctamente'))
}

const EditForm = ({ item }) => {

  const { title, description, stock, price, category, image } = item;
  const [values, setValues] = useState({ title, description, stock, price, category, image })
  const [file, setFile] = useState(null)

  const handleChange = () => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateProduct(item.slug, values, file)
  }

  return (
    <div className="container m-auto mt-6 max-w-lg">
      <form onSubmit={handleSubmit} className="my-12">
        <label htmlFor="title">Nombre</label>
        <input 
          type="text"
          value={values.title}
          required
          className="p-2  rounded-md w-full border border-blue-100 block my-4"
          name="title"
          onChange={handleChange}
        />

        <label htmlFor="category">Categoría</label>
        <input 
          type="text"
          value={values.category}
          required
          className="p-2  rounded-md w-full border border-blue-100 block my-4"
          name="category"
          onChange={handleChange}
        />

        <label htmlFor="title">Descripción</label>
        <input 
          type="text"
          value={values.description}
          required
          className="p-2  rounded-md w-full border border-blue-100 block my-4"
          name="description"
          onChange={handleChange}
        />

        <label htmlFor="price">Precio</label>
        <input 
          type="number"
          value={values.price}
          required
          className="p-2  rounded-md w-full border border-blue-100 block my-4"
          name="description"
          onChange={handleChange}
        />

        <label htmlFor="url">Imágen</label>
        <input 
          type="file"
          className="p-2  rounded-md w-full border border-blue-100 block my-4"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label htmlFor="stock">Stock</label>
        <input 
          type="number"
          value={values.stock}
          required
          className="p-2  rounded-md w-full border border-blue-100 block my-4"
          name="description"
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default EditForm