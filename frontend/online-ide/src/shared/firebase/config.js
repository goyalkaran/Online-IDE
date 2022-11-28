// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP6uTTF5sE4yzXFCfWSjlh5y8DKps1GyU",
  authDomain: "online-ide-1bebf.firebaseapp.com",
  projectId: "online-ide-1bebf",
  storageBucket: "online-ide-1bebf.appspot.com",
  messagingSenderId: "1084560794387",
  appId: "1:1084560794387:web:07de18f5d3c641e8d730e6",
  measurementId: "G-N294EVNNKT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// login with gmail

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  console.log("provider", provider);
  const auth = getAuth();
  return signInWithPopup(auth, provider);
};
const analytics = getAnalytics(app);
