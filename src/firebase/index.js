import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAcsbB1UZUx9baZ1VoOiynIx1I2avHCVKQ",
  authDomain: "portfolio-e57ac.firebaseapp.com",
  projectId: "portfolio-e57ac",
  storageBucket: "portfolio-e57ac.appspot.com",
  messagingSenderId: "789681600020",
  appId: "1:789681600020:web:2a4bb155865e986e845901"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };