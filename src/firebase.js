import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbnKLmnxhEqT3rAMHHG3FmrepsvObmc8A",
    authDomain: "fir-42c6a.firebaseapp.com",
    projectId: "fir-42c6a",
    storageBucket: "fir-42c6a.appspot.com",
    messagingSenderId: "425171044900",
    appId: "1:425171044900:web:7c4da0db95b246eb81a6b1",
    measurementId: "G-RRYWD05JE5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };