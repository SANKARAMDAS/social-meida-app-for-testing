// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0A8Z1v3dYgaJHQ9quy6Tgm4phpZgLW_c",
    authDomain: "socialmedia-react-33f21.firebaseapp.com",
    projectId: "socialmedia-react-33f21",
    storageBucket: "socialmedia-react-33f21.appspot.com",
    messagingSenderId: "366465834815",
    appId: "1:366465834815:web:8cfa75905e66ad5ab0fd8a",
    measurementId: "G-Z8VH3FST2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);