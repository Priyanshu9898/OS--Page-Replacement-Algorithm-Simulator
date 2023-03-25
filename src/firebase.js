// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsK5Qs0aQDftwsO8dp9HBbZZ6VO0K3JdY",
  authDomain: "os-project-a65ad.firebaseapp.com",
  projectId: "os-project-a65ad",
  storageBucket: "os-project-a65ad.appspot.com",
  messagingSenderId: "161971283710",
  appId: "1:161971283710:web:bf4207f18b7331cc5ba7af",
  measurementId: "G-J17Q1Y2CZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { analytics, db, auth };
