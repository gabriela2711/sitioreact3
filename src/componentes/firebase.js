// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIUvJVQ19stHkGkFOI0dyDZNrxF9pXnWU",
  authDomain: "fb-bdreact3-46931.firebaseapp.com",
  projectId: "fb-bdreact3-46931",
  storageBucket: "fb-bdreact3-46931.appspot.com",
  messagingSenderId: "871421912736",
  appId: "1:871421912736:web:6f68296d1f6f7f5b42cbc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const bd=fb.firestore();