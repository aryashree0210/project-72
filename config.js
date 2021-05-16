import firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyBKaQaEPVyLXCxAJWc47_lsdoFD38rXcUc",
    authDomain: "students-attendance-app-28485.firebaseapp.com",
    databaseURL: "https://students-attendance-app-28485-default-rtdb.firebaseio.com",
    projectId: "students-attendance-app-28485",
    storageBucket: "students-attendance-app-28485.appspot.com",
    messagingSenderId: "466883399223",
    appId: "1:466883399223:web:aec88d9bd414ebc9be79b2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();