// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLpGoaLxSWjfVHD81G4KxiVan5R2acpAs",
  authDomain: "empower-t3.firebaseapp.com",
  projectId: "empower-t3",
  storageBucket: "empower-t3.appspot.com",
  messagingSenderId: "558985038006",
  appId: "1:558985038006:web:54f695d1ef6abf98cd3e17",
  measurementId: "G-NXHTMLRPFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
