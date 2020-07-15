import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./ColorButton.js";
import ColorButton from "./ColorButton.js";

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state={
      bColor: "white"
    }
  }

  changeBg= (color)=>{
    this.setState({
      bgColor:color
    })
  }
  render(){
    return (
// Accesses props to change color. 
      <div className="App" style= {{backgroundColor: this.state.bgColor}}>
      <ColorButton changeColor={this.changeBg} color= "red"/>
      <ColorButton changeColor={this.changeBg} color= "blue"/> 
      <ColorButton changeColor={this.changeBg} color= "purple"/>
      <ColorButton changeColor={this.changeBg} color= "magenta"/>
      <ColorButton changeColor={this.changeBg} color= "orange"/>
      </div>
    )
  }
}

export default App;
