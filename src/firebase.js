// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFo5NtfjwLsT709eSRXsWxgQc2d87avmw",
  authDomain: "jobmate-22542.firebaseapp.com",
  projectId: "jobmate-22542",
  storageBucket: "jobmate-22542.appspot.com",
  messagingSenderId: "410639253066",
  appId: "1:410639253066:web:faab68ad55df61938cb0b3",
  measurementId: "G-9K362S8F2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize service
const db = getFirestore();

// Collection
const colRef = collection(db, "gamers");

const analytics = getAnalytics(app);

export { app, db, colRef };