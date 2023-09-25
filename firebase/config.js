
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"//banco de dados serviço do Firebase


const firebaseConfig = {
  apiKey: "AIzaSyBZlBhajv9d3ji_M3-z31JgirvNrDBKKN8",
  authDomain: "miniblog-2c3e2.firebaseapp.com",
  projectId: "miniblog-2c3e2",
  storageBucket: "miniblog-2c3e2.appspot.com",
  messagingSenderId: "337980835768",
  appId: "1:337980835768:web:74246f8805592a6cb1f14d"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }