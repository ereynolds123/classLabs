import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router"
import Header from "./Header.js"
import Home from "./Home.js"
import About from "./About.js"
import Creative from "./Creative"


function App() {
  return (
    <div >
      <Header />
     <Switch>
     
     <Route exact path= "/" component={Home} />
     <Route path ="/about" component= {About} />
     <Route path="/creative" component={Creative}/>
    

    
    </Switch> 
     </div>
  
  );
}

export default App;
