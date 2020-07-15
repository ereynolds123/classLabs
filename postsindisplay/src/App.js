import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./Components/Display.js"
import List from "./Components/List.js"

class App extends React.Component{
  constructor (props){
    super(props)
    this.state ={
      content: ""
    }
  }

  clickHandler =(evt)=>{
    evt.preventDefault();
    this.setState ({
      content: evt.target.textContent
    })
    console.log(evt.target)
  }

  render(){
    return(
      <>
      <Display content={this.state.content}/>
      <List />
      </>
    )
  }
}


export default App;
