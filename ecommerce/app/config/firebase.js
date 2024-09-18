// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKH0_OJuRALDlV2T7Up_SG4ryXDUDwBmo",
  authDomain: "ecommcer-69775-nextjs.firebaseapp.com",
  projectId: "ecommcer-69775-nextjs",
  storageBucket: "ecommcer-69775-nextjs.appspot.com",
  messagingSenderId: "864696774379",
  appId: "1:864696774379:web:f22cb9c89f45704c3018ae",
  measurementId: "G-DX32P8H8DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  app, db, storage, auth, provider
}