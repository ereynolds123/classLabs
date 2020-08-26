//React does not care how you organize projects. This one is simple.

//This creates a component called App. React is just Javascript under the hood. This function acts as a stamp.Components are something that returns markup.

import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.js";
// import Pet from "./Pet";


const App = () => {


  return (
      <div>
          <h1 id="somethingimportant">Adopt me</h1>
         <SearchParams></SearchParams>
      </div>
  )
};

//When you render, you override anything inside the div. App is a composite element
render(<App/>, document.getElementById("root"));
