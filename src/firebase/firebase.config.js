// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIta5ewRUNSjmBRqiE7-5aUh5wwztUdMA",
  authDomain: "context-hooks.firebaseapp.com",
  projectId: "context-hooks",
  storageBucket: "context-hooks.appspot.com",
  messagingSenderId: "12929649920",
  appId: "1:12929649920:web:a2910eebf2961891e1f7e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;