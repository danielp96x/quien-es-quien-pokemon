import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { getDatabase } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyA8hsrP5CabjRnvsVx4-CYaXapMtazWt2M",
  authDomain: "pkmn996-9da5b.firebaseapp.com",
  databaseURL: "https://pkmn996-9da5b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pkmn996-9da5b",
  storageBucket: "pkmn996-9da5b.firebasestorage.app",
  messagingSenderId: "1060549708608",
  appId: "1:1060549708608:web:2bcf52cf0d55486ad208a5"
};


const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

console.log("🔥 Firebase conectado");