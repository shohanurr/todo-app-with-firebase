// const { configure } = require("@testing-library/react");

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
         apiKey: "AIzaSyBHIFNvUPVtn_y0oSHpqRX-ooqb7i6oTIA",
         authDomain: "todo-app-with-firebase-236a0.firebaseapp.com",
         databaseURL: "https://todo-app-with-firebase-236a0.firebaseio.com",
         projectId: "todo-app-with-firebase-236a0",
         storageBucket: "todo-app-with-firebase-236a0.appspot.com",
         messagingSenderId: "776430939813",
         appId: "1:776430939813:web:1ed733cb77161bf627274c",
         measurementId: "G-XN3PYJ40WT"
});

const db = firebaseApp.firestore();
 export default db;