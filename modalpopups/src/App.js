import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { findAllByTestId } from "@testing-library/react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmodal: false,
    };
  }
  toggleModal = (evt) => {
    evt.preventDefault();
    this.setState(() => {
      return { showmodal: true };
    });
  };

  closeModal = (evt) => {
    evt.preventDefault();
    this.setState(() => {
      return { showmodal: false };
    });
  };

  render() {
    const showmodal = this.state.showmodal;
    return (
      <div>
        {this.state.showmodal ? (
          <div id="modalcontainer">
            <div id="modal">
              "Hello this is a modal"
              <button onClick={this.closeModal}>Close</button>{" "}
            </div>
          </div>
        ) : null}
        <div id="content">
          <h1> React Modal Lab</h1>
          <button onClick={this.toggleModal}>Click button to see modal</button>
        </div>
      </div>
    );
  }
}

export default App;
