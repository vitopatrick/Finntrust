// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXG2EAtPngmKzwKgctPQC_v6ZJRiOMFt8",
  authDomain: "Save Spherestrust-92b37.firebaseapp.com",
  projectId: "Save Spherestrust-92b37",
  storageBucket: "Save Spherestrust-92b37.appspot.com",
  messagingSenderId: "942146766288",
  appId: "1:942146766288:web:5d3c735c9dd919a528e5d5",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);