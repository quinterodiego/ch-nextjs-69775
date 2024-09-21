'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../config/firebase';


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null
  })
  
  const registerUser = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
  }

  const loginUser = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
    } catch (error) {
      console.log('Error', error)      
    }
  }
  
  const logout = async () => {
    await signOut(auth)
  }
  
  const googleLogin = async () => {
    await signInWithPopup(auth, provider)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if(user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid
        })
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null
        })
      }
    })
  }, [])
  

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, googleLogin, logout }} >
      {children}
    </AuthContext.Provider>
  )
}
