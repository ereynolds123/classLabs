import firebase from "firebaseapp"
import "/firebase/auth"
import "firebase/database"

const firebaseConfig={
    apiKey: "AIzaSyAJTv1tO8Zfd244weq7ac20IBfjaaGT7gU",
    authDomain: "fir-example-50ac9.firebaseapp.com",
    databaseURL: "https://fir-example-50ac9.firebaseio.com",
    projectId: "fir-example-50ac9",
    storageBucket: "fir-example-50ac9.appspot.com",
    messagingSenderId: "174633244214",
    appId: "1:174633244214:web:d7e183c9d102fb39002a97",
    measurementId: "G-ZCL1QLPR0W"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const myData= fireApp.database();
  const googleProvider= new firebase.auth.GoogleAuthProvider();

export{fireApp, myData, googleProvider}