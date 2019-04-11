import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyCnQl0VXuL4TLVDRdK8WuH2B52xyssNjGo",
    authDomain: "react-project-b6e5f.firebaseapp.com",
    databaseURL: "https://react-project-b6e5f.firebaseio.com",
    projectId: "react-project-b6e5f",
    storageBucket: "react-project-b6e5f.appspot.com",
    messagingSenderId: "745689399011"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 