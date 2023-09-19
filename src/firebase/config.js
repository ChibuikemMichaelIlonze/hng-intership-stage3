// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdcVCUuMP0qNkG5V7GOLyT5tbZG3ECm9M",
  authDomain: "image-app-84abf.firebaseapp.com",
  projectId: "image-app-84abf",
  storageBucket: "image-app-84abf.appspot.com",
  messagingSenderId: "1065380824901",
  appId: "1:1065380824901:web:7032e9d4ad792545dbe02c",
  measurementId: "G-QXZ2JXELHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {auth}
