const firebaseConfig = {
  apiKey: "AIzaSyAJTv1tO8Zfd244weq7ac20IBfjaaGT7gU",
  authDomain: "fir-example-50ac9.firebaseapp.com",
  databaseURL: "https://fir-example-50ac9.firebaseio.com",
  projectId: "fir-example-50ac9",
  storageBucket: "fir-example-50ac9.appspot.com",
  messagingSenderId: "174633244214",
  appId: "1:174633244214:web:d7e183c9d102fb39002a97",
  measurementId: "G-ZCL1QLPR0W",
};

const myApp = firebase.initializeApp(firebaseConfig);
myObj = myApp.database();
const auth = firebase.auth;
const googleProvider = new firebase.auth.GoogleAuthProvider();
document.getElementById("googleButton").addEventListener("click", (evt) => {
  myApp
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res);
        document.getElementById("name").innerHTML= "Name: " +res.user.displayName 
        document.getElementById("email").innerHTML= 
        "Email: "+res.user.email
        
    });
});

document.getElementById("signInform").addEventListener("submit", (evt) => {
  evt.preventDefault();
  let user= document.getElementById("userEmail").value;
  let password= document.getElementById("password").value;

  myApp.auth().signInWithEmailAndPassword(user, password).then((res)=>{
    console.log(res)
  })
})
