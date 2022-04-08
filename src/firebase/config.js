// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/fireStore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH9DmZd4falO555qu0PIK-DQRuw72oXb0",
  authDomain: "reactjs-26240.firebaseapp.com",
  projectId: "reactjs-26240",
  storageBucket: "reactjs-26240.appspot.com",
  messagingSenderId: "637274965415",
  appId: "1:637274965415:web:e63eb8f4718bac8f62a282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const datab= getFirestore(app);