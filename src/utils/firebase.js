// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8wuKeWwBfQTsiQ1NklxkBUkJ85DSQPjA",
  authDomain: "netflixgpt-18fc7.firebaseapp.com",
  projectId: "netflixgpt-18fc7",
  storageBucket: "netflixgpt-18fc7.firebasestorage.app",
  messagingSenderId: "520391282095",
  appId: "1:520391282095:web:0b6ec064a978fb6d1e335a",
  measurementId: "G-4BX8LG1JQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();