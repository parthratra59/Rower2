// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from './firebase'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMhkHdV1qq9sRxCRjpcpeJxNkw9PA5Qls",
    authDomain: "rowertaxi-748eb.firebaseapp.com",
    projectId: "rowertaxi-748eb",
    storageBucket: "rowertaxi-748eb.appspot.com",
    messagingSenderId: "777772305840",
    appId: "1:777772305840:web:f92c84ae380c39108d1a75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default firebase;