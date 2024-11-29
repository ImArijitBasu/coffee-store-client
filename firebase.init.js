// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDke_YoNCOvoCH91PwZRYR_RLn53EPC4jQ",
  authDomain: "coffee-store-by-arijit.firebaseapp.com",
  projectId: "coffee-store-by-arijit",
  storageBucket: "coffee-store-by-arijit.firebasestorage.app",
  messagingSenderId: "555247506825",
  appId: "1:555247506825:web:52147b80d431bfd2577d58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)