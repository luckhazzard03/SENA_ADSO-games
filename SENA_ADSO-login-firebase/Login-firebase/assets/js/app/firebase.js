// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3ys1yN7EIMsLvDG-aFvzdIAPrvRF20UA",
  authDomain: "login-firebase-d20f1.firebaseapp.com",
  projectId: "login-firebase-d20f1",
  storageBucket: "login-firebase-d20f1.appspot.com",
  messagingSenderId: "506798970551",
  appId: "1:506798970551:web:fdf0916e7dfb4596ae9f32",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
