import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAvWE9hMCmxUBmfU3qfIRaXu-hQLj2Mpwg",
  authDomain: "react-autenticacao-28ed4-17459.firebaseapp.com",
  projectId: "react-autenticacao-28ed4",
  storageBucket: "react-autenticacao-28ed4.appspot.com",
  messagingSenderId: "385683272787",
  appId: "1:385683272787:web:6f5e0c6059b918b57d82a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
