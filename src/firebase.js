// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2jV0GVtSaD09X4eWtajIwOHllky_t4nQ",
  authDomain: "clone-aab06.firebaseapp.com",
  projectId: "clone-aab06",
  storageBucket: "clone-aab06.appspot.com",
  messagingSenderId: "42274189542",
  appId: "1:42274189542:web:7e3a4a61bcf2fb62decb27",
  measurementId: "G-HGEEL2926Q"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth}