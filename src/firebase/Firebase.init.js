// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzpRhQUiHKz2TYyv6doM306p-cDH7X4Lg",
  authDomain: "lositfy.firebaseapp.com",
  projectId: "lositfy",
  storageBucket: "lositfy.firebasestorage.app",
  messagingSenderId: "149313556441",
  appId: "1:149313556441:web:b44419c7f7c7c4798f93c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;