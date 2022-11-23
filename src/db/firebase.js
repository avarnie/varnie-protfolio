// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF7WbraAJW96ZNtPwzRuNXc39K1wj4jLo",
  authDomain: "my-portfolio-app-c4fc7.firebaseapp.com",
  projectId: "my-portfolio-app-c4fc7",
  storageBucket: "my-portfolio-app-c4fc7.appspot.com",
  messagingSenderId: "1047079736178",
  appId: "1:1047079736178:web:57b06d0924b4fb761103eb",
  measurementId: "G-QGT90M9VBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirestoreDB = getFirestore(app);
const analytics = getAnalytics(app);