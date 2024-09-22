import { useAuthContext } from '@/app/context/AuthContext'
import React from 'react'

const LogoutButton = () => {

  const { logout } = useAuthContext()

  return (
    <button className='py-2 px-4 bg-gray-500 text-white border outline-white rounded-md mr-2 hover:opacity-75' onClick={logout}>Salir</button>
  )
}

export default LogoutButton