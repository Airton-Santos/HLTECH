// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Opcional: só use se for necessário

const firebaseConfig = {
  apiKey: "AIzaSyBXmVm0Jm0E8Gpf72itXjQTze5eAaJKcIk",
  authDomain: "hltech-3813e.firebaseapp.com",
  projectId: "hltech-3813e",
  storageBucket: "hltech-3813e.appspot.com", // <-- corrigido ".app" para ".appspot.com"
  messagingSenderId: "826993866695",
  appId: "1:826993866695:web:8367050c5b931d52884be2",
  measurementId: "G-P1SJXD135C" // opcional
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Se quiser usar analytics, descomente abaixo e ative no Firebase
// const analytics = getAnalytics(app);

export { auth };
