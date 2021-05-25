import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA1GIrXKjjuEUt0cb9Lzk0VgCGjT16Z9qQ",
  authDomain: "barter-system-app-7dd3c.firebaseapp.com",
  projectId: "barter-system-app-7dd3c",
  storageBucket: "barter-system-app-7dd3c.appspot.com",
  messagingSenderId: "407518948190",
  appId: "1:407518948190:web:609ecb41f6908efccebdcf"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();