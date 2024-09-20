'use client'

import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../config/firebase';


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

// const registerUser = async (values) => {
//   const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
//   console.log(userCredential)
//   const user = userCredential.user
//   setUser({
//     logged: true,
//     email: user.email,
//     uid: user.uid
//   });
// }

const loginUser = async (values) => {
  await signInWithEmailAndPassword(auth, values.email, values.password)
}

const logout = async () => {
  await signOut()
}

const googleLogin = async () => {
  await signInWithPopup(auth, provider)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null
  })

  const registerUser = async (values) => {
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
    console.log(userCredential)
    const user = userCredential.user
    setUser({
      logged: true,
      email: user.email,
      uid: user.uid
    });
  }

  return <AuthContext.Provider value={{ user, registerUser, loginUser, logout, googleLogin }} >
    {children}
  </AuthContext.Provider>
}
