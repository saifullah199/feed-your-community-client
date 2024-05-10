// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9yMYdmf9FsMbAykaO5tyCMk-07xnhuxI",
  authDomain: "feed-your-community.firebaseapp.com",
  projectId: "feed-your-community",
  storageBucket: "feed-your-community.appspot.com",
  messagingSenderId: "827977647061",
  appId: "1:827977647061:web:7868da58a18b5623e6735c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;