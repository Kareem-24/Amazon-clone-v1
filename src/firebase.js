import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZXE6kmZga4_XMpwOI-zUHZPf5qqr8k8Q",
  authDomain: "clone-36442.firebaseapp.com",
  projectId: "clone-36442",
  storageBucket: "clone-36442.appspot.com",
  messagingSenderId: "643364831714",
  appId: "1:643364831714:web:be3e0786a9a6fd5cb4b9bb",
  measurementId: "G-HWREV5QTV2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
