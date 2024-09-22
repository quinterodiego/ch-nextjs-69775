'use client'

import { useAuthContext } from "../context/AuthContext"
import LoginPage from "./login/page"

const AdminLayout = ({ children, login }) => {

  const { user } = useAuthContext()
  console.log('user', user)
  return (
    <>
      {
        user.logged ? children : <LoginPage />
      }
    </>
  )
}

export default AdminLayout