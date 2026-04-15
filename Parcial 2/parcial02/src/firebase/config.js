// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADvwYnhZSta5-MRGn0cmHD2nFkqMkQymI",
  authDomain: "parcial02-f24a5.firebaseapp.com",
  projectId: "parcial02-f24a5",
  storageBucket: "parcial02-f24a5.firebasestorage.app",
  messagingSenderId: "185261815727",
  appId: "1:185261815727:web:dfef43999b6c7cd3a6a15a",
  measurementId: "G-LSCB17YT97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firebasestorage = getStorage(app)
const db = getFirestore(app);

export { app, auth, firebasestorage, db }