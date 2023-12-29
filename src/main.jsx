import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
/* import './index.css' */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQGjVf9rzsjdzd4heRC-YIeN4qtll_s3s",
  authDomain: "gineco-store.firebaseapp.com",
  projectId: "gineco-store",
  storageBucket: "gineco-store.appspot.com",
  messagingSenderId: "365062726593",
  appId: "1:365062726593:web:30c669ec7ed7466a0b0540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider> 
    <App/>
  </ChakraProvider>
  

)
