import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  query,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection,
} from "firebase/firestore";
import {
  ref,
  getStorage,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";
import {
  getAuth,
  signOut,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb6wrf0f0XxlJY1E1fWjuribfTQeFsIuw",
  authDomain: "car-market-8f22c.firebaseapp.com",
  projectId: "car-market-8f22c",
  storageBucket: "car-market-8f22c.firebasestorage.app",
  messagingSenderId: "383512968330",
  appId: "1:383512968330:web:8d59c3c3df790069a38173",
  measurementId: "G-YM1NB5GYDZ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// FireAuth
const firebaseAuth = getAuth();

// FireStore
const firestoreDB = getFirestore(firebaseApp);

// Storage
const firebaseStorage = getStorage(
  firebaseApp,
  "gs://car-market-8f22c.firebasestorage.app"
);

// Analytics
const firebaseAnalytics = getAnalytics(firebaseApp);

export {
  firebaseAuth,
  firebaseApp,
  firestoreDB,
  firebaseStorage,
  firebaseAnalytics,
  ref,
  doc,
  query,
  getDoc,
  setDoc,
  getDocs,
  signOut,
  getAuth,
  deleteDoc,
  updateDoc,
  collection,
  uploadBytes,
  deleteObject,
  getDownloadURL,
  updatePassword,
  signInWithPopup,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
};
