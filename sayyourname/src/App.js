import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
  constructor (props){
    super(props)// A function that brings in from prototype
    this.state ={
      
      firstVal: "",
      lastVal: ""
    }
    
  }

  handleSubmit= (evt)=>{
    evt.preventDefault();
    this.setState({
      firstName : this.state.firstVal,
      lastName : this.state.lastVal
    })
   
  }

  handleFirstChange= (evt)=> {
    evt.preventDefault();
    let name= evt.target.value;

    this.setState ({firstVal: name})
  }

  handleLastChange= (evt)=> {
    evt.preventDefault();
    let name= evt.target.value

    this.setState ({lastVal: name})
  }
  render(){
    return ( 
    
    <div>
      <h2 id="displayArea">Hello, {this.state.firstName} {this.state.lastName} </h2>
      <form onSubmit={this.handleSubmit}>
        <input type= "text" value={this.state.firstVal}onChange= {this.handleFirstChange}></input>
        <input type= "text" value={this.state.LasttVal}onChange= {this.handleLastChange}></input>
        <input type="submit" />
      </form>
    </div>
    )
  }

}
   
export default App;

