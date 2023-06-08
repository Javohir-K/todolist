import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMEEehtad-rUhOlnhlJNQZbYeuQ6E6JSg",
  authDomain: "todo-app-ed.firebaseapp.com",
  projectId: "todo-app-ed",
  storageBucket: "todo-app-ed.appspot.com",
  messagingSenderId: "465675191332",
  appId: "1:465675191332:web:e90ea5c6596f7c78b1c4b1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export { app };
