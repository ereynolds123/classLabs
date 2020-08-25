//React does not care how you organize projects. This one is simple.

//This creates a component called App. React is just Javascript under the hood. This function acts as a stamp.Components are something that returns markup.

import React from "react";
import { render } from "react-dom";
import  Pet  from "./Pet";

const App = () => {
  return React.createElement(
    "div", //type of element
    {},
    [
      //attributes (id, class)
      React.createElement("h1", {}, "Adopt Me"), //this is the children
      React.createElement(Pet, {
        name: "Patience",
        animal: "Dog",
        breed: "Golden Retriever",
      }),
      React.createElement(Pet, {
        name: "Peeper",
        animal: "Cat",
        breed: "Siamese",
      }),
      React.createElement(Pet, {
        name: "Percy",
        animal: "Cat",
        breed: "Mixed",
      }),
    ]
  );
};

//When you render, you override anything inside the div. App is a composite element
render(React.createElement(App), document.getElementById("root"));
