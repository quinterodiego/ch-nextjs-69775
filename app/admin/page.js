import React from 'react'
import ProductsTable from '../components/admin/ProductsTable'

const AdminPage = () => {
  return (
    <div className='container m-auto mt-6'>
      <h1 className='text-2xl my-10 border-b pb-4'>Panel de Administración</h1>
      <ProductsTable />
    </div>
  )
}

export default AdminPage