// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDS2gI6Qesvy72UO5rJPlKkQ7Sqrizal-k",
  authDomain: "mern-blog-d2ab9.firebaseapp.com",
  projectId: "mern-blog-d2ab9",
  storageBucket: "mern-blog-d2ab9.firebasestorage.app",
  messagingSenderId: "711960069432",
  appId: "1:711960069432:web:ca6a11db4cdb431a18edcd",
  measurementId: "G-TXP187DEXZ"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
