import React from 'react';
import logo from './logo.svg';
import './App.css';
import fireApp from "./assests/firebaseConfig"
import myData from "./assests/firebaseConfig"
import googleProvider from "./assests/firebaseConfig"

class App extends React.Compontent {
constructor(props){
super(props)

this.state={
user: fireApp.auth().currentUser
}
}

  render(){
    return(
      <div>
        {this.state.user ? <Welcome user={this.state.user} />: <div><h4>Please sign in...</h4><SignUp><div></SignUp></div>}
      </div>
    )
  }
}

export default App;
