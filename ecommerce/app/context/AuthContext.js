'use client'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../config/firebase'

const { createContext, useContext, useState } = require("react")

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null
  })

  const registerUser = async (values) => {
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
    setUser({
      logged: true,
      email: userCredential.user.email,
      uid: userCredential.user.uid
    });
  }

  const loginUser = async (values) => {
    await signInWithEmailAndPassword(auth, values.email, values.password)
  }

  const logout = async () => {
    await signOut()
  }

  const googleLogin = async () => {
    await signInWithPopup(auth, provider)
  }

  return <AuthContext.Provider value={{ user, registerUser, loginUser, logout, googleLogin }} >
    {children}
  </AuthContext.Provider>
}
