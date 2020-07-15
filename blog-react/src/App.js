import React from 'react';
import logo from './logo.svg';
import './App.css';
//Imports your browser router which allows you to do routing in react
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = props =>{
  return (
    <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/posts" component={Posts} />
      <Route path ="authors" component ={Authors} />
      <Route path="/:author/:post" component={AuthorPost} />
      <Route exact path="./" component ={Home} />
      <Route path ="" component={NotFound}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
