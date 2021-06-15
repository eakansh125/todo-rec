import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBmeze0AY2LL68vL7CPvZwlVqfaLnfLedE",
  authDomain: "todo-rec.firebaseapp.com",
  projectId: "todo-rec",
  storageBucket: "todo-rec.appspot.com",
  messagingSenderId: "495767366181",
  appId: "1:495767366181:web:be9e6d57433d2c6ef26dcc",
  measurementId: "G-Y1EDPVKPBT"
});

const db=firebaseApp.firestore();

export default db;