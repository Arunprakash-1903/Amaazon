import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDey9Y6GDTvcNV-MhYr79uDQ1Ruv4VE2YA",
  authDomain: "fir-e7762.firebaseapp.com",
  databaseURL: "https://fir-e7762.firebaseio.com",
  projectId: "fir-e7762",
  storageBucket: "fir-e7762.appspot.com",
  messagingSenderId: "181746957266",
  appId: "1:181746957266:web:b1f1efda7fb2aac260660b",
  measurementId: "G-F7NF59QBGV"
};
  firebase.initializeApp(firebaseConfig);
 export const db=firebase.firestore();
 export const auth=firebase.auth();
