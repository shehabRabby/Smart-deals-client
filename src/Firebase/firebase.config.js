// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB6A8FDkZu2aNOqjbJIgjWFxBC10OpD-4",
  authDomain: "smart-deals-96b93.firebaseapp.com",
  projectId: "smart-deals-96b93",
  storageBucket: "smart-deals-96b93.firebasestorage.app",
  messagingSenderId: "737214273299",
  appId: "1:737214273299:web:816ad3fb94a2d5fd2e2ce6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
