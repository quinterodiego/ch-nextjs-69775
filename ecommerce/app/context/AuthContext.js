'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db, provider } from '../config/firebase';
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const router = useRouter()
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
    onAuthStateChanged(auth, async (user) => {
      if(user) {
        const docRef = doc(db, 'roles', user.uid)
        const userDoc = await getDoc(docRef)
        if(userDoc.data()?.rol === 'admin') {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid
          })
        } else {
          router.push("/unauthorized")
          logout()
        } 
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
