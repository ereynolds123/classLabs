import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props); // A function that brings in from prototype
    this.state = {
      welcome: "",
      display: {display: "inline-block"}
    };
  }

  handleClick = (evt) => {
    evt.preventDefault();
    this.setState({
      welcome: "Welcome! This is react",
      display: {display: "none"}
    })
   
  };

  render() {
    return (
      <div>
        <button id="button" onClick={this.handleClick}style= {this.state.display}>Please log in</button>
        <h1 >{this.state.welcome}</h1>
      </div>
    );
  }
}

export default App
