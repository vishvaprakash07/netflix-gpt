// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHO0jWHx91-HS_aXOW233wbudlHsXtols",
  authDomain: "trailer-hub-751ee.firebaseapp.com",
  projectId: "trailer-hub-751ee",
  storageBucket: "trailer-hub-751ee.firebasestorage.app",
  messagingSenderId: "345192990597",
  appId: "1:345192990597:web:12b8e2d4f769a19b30e6ec",
  measurementId: "G-SW29GW7KNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();