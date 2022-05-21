import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"  

const firebaseConfig = {
  apiKey: "AIzaSyAnRKQXW9v6NBxqqLPVEKkZlglU3aCZHjU",
  authDomain: "whatsapp-clone-2b94c.firebaseapp.com",
  projectId: "whatsapp-clone-2b94c",
  storageBucket: "whatsapp-clone-2b94c.appspot.com",
  messagingSenderId: "554303096114",
  appId: "1:554303096114:web:aa356d57bee674a50d832b",
  measurementId: "G-HY6TLLERDF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
