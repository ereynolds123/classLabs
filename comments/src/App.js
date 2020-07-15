//See Bob's this code is broken. 

import React from 'react';
import { render } from '@testing-library/react';


class App extends React.Component{
  constructor (props){
    super(props )
    this.state={
      nameVal="",
      commentVal=""
    }
  }


submitHandler= (evt)=>{
  evt.preventDefault();
  let comment =[{
    name: this.state.nameVal,
    content= this.state.commentVal
  }]

  this.setState((prevState)=>{
    if(prevState.comments){
    return {comment: prevState.comments.concat(comment)}
  }else {
    return {comments: comment}
  }
}


nameChange =(evt)=>{
  evt
}

commentChange = (evt)=>{

}

render(){
  let commentList =this.state.comments.map(comment) => name= {comment.name} content= {comment.content}//Returns an array

  return (
    <div>
      <ul>
        {commentList}
      </ul>
      <form onSubmit= {submitHandler}>
        <label>Name:<input type="text" onChange={this.nameChange}></input></label>
        <label>Comment: <input type="text" onChange={this.commentChange}></input> </label>
        <input type= "submit"></input>
      </form>
    </div>
  )
}
}

export default App;
