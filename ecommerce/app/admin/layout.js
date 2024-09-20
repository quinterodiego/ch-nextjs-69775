'use client'

import { useAuthContext } from "../context/AuthContext"

import React from 'react'

const AdminLayout = ({ children, login }) => {

  const { user } = useAuthContext()

  return (
    <>
    {
      user.logged ? children : login
    }
    </>
  )
}

export default AdminLayout