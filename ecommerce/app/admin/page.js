import React from 'react'
import ProductsTable from '../components/admin/ProductsTable'

const AdminPage = () => {
  return (
    <div className='container m-auto'>
      <h1 className='text-2xl py-4'>Panel de Administración</h1>
      <ProductsTable />
    </div>
  )
}

export default AdminPage