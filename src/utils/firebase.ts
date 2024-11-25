// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBfacylEBHtLOfRswpFD0F6S9zRmD9yOI",
    authDomain: "vue-firebase-de62d.firebaseapp.com",
    projectId: "vue-firebase-de62d",
    storageBucket: "vue-firebase-de62d.firebasestorage.app",
    messagingSenderId: "336820151737",
    appId: "1:336820151737:web:57b04481ddd0612e758268"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider ,db};


