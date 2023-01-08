import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsFksrcQKLnUtV61_hNeOFi1AxYsQcvbk",
  authDomain: "tic-tac-toe-961b9.firebaseapp.com",
  projectId: "tic-tac-toe-961b9",
  storageBucket: "tic-tac-toe-961b9.appspot.com",
  messagingSenderId: "996572601682",
  appId: "1:996572601682:web:05d595a47262d4a5d7ee8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
