import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Class App allows you to you state
class App extends React.Component {
  constructor(props) {
    super(props);
    //Originally your color of button starts at blue
    this.state = {
      backgroundcolorone: "blue",
      backgroundcolortwo: "red",
      backgroundcolorthree: "blue",
      backgroundcolorfour: "green",
    };
  }

  //This function handles a click and changes the color from blue to red and red to blue
  handleClick = (evt) => {
    evt.preventDefault();
    if (this.state.backgroundcolorone === "blue") {
      this.setState({
        backgroundcolorone: "red",
      });
    } else if (this.state.backgroundcolortwo === "blue") {
      this.setState({
        backgroundcolortwo: "red",
      });
    } else if (this.state.backgroundcolortwo === "red") {
      this.setState({
        backgroundcolortwo: "blue",
      });
    }else {
      this.setState({
        backgroundcolorone: "blue",
      });
    }
  };
  //Creates the elements on the page, handles the click and styles the button element.
  render() {
    return (
      <div>
        <h1
          style={{ backgroundColor: this.state.backgroundcolorone }}
          onClick={this.handleClick}
        >
          {" "}
          Change Button Color
        </h1>
        <h1
          style={{ backgroundColor: this.state.backgroundcolortwo }}
          onClick={this.handleClick}
        >
          {" "}
          Hi
        </h1>
        <h1
          style={{ backgroundColor: this.state.backgroundcolorthree }}
          onClick={this.handleClick}
        >
          {" "}
          This is different
        </h1>
        <h1
          style={{ backgroundColor: this.state.backgroundcolorfour }}
          onClick={this.handleClick}
        >
          {" "}
          Another time different
        </h1>
      </div>
    );
  }
}

export default App;
