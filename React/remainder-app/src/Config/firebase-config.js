// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAob0X0xW7YIb4xxZelAoZ17AQjryWoV9s",
  authDomain: "fsd22j.firebaseapp.com",
  projectId: "fsd22j",
  storageBucket: "fsd22j.appspot.com",
  messagingSenderId: "337565119927",
  appId: "1:337565119927:web:cc6a83b4e009db9cd1a432",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
