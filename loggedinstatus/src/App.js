import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

//This class sets up a log in state
class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
//This function toggles the state so that it changed from loggedin to not logged in and back. 
toggleLogIn= (evt)=> {
  evt.preventDefault();
  this.setState((prevState)=>{
    return {isLoggedIn: !prevState.isLoggedIn}
  })
}

  render(){
    const isLoggedIn= this.state.isLoggedIn;

  return(
    <div>
      <br></br>
      The user is <b>{isLoggedIn ? "currently" : "not"} </b> logged in.
      <br></br>
      <button onClick ={this.toggleLogIn}>Log In</button>
    </div>
  )
  }
}

export default Greeting;
