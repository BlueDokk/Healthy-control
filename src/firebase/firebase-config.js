import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC5JMeLQj8hYTx1IzIl-rQROuvTtoEh_zE",
    authDomain: "healthy-control.firebaseapp.com",
    projectId: "healthy-control",
    storageBucket: "healthy-control.appspot.com",
    messagingSenderId: "12519599389",
    appId: "1:12519599389:web:7ffe949a08c57f54d945f4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {
      db,
      firebase
  }