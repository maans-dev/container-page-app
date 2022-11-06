// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get, getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuxVvMvdxOWRLHOILBuuUl0EHthJiVNm8",
  authDomain: "kiru-d6c87.firebaseapp.com",
  projectId: "kiru-d6c87",
  storageBucket: "kiru-d6c87.appspot.com",
  messagingSenderId: "546934750461",
  appId: "1:546934750461:web:7999482a2f888cad161294",
  measurementId: "G-7QJMPRE022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)
// const analytics = getAnalytics(app);