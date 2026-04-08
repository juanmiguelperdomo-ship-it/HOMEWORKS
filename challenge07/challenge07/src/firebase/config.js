// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBgG3mrKDHx_JvZtrdN7Ui6qnsXG2e8eqE",
  authDomain: "estructuraii-1f6c1.firebaseapp.com",
  projectId: "estructuraii-1f6c1",
  storageBucket: "estructuraii-1f6c1.firebasestorage.app",
  messagingSenderId: "771996847823",
  appId: "1:771996847823:web:23f6e219c88fbf8954f1ba",
  measurementId: "G-YTXQYS5175"
};

const app = initializeApp(firebaseConfig);
const firebasestorage = getStorage(app)
const db = getFirestore(app)
const auth = getAuth(app)


export { app, auth, firebasestorage, db }