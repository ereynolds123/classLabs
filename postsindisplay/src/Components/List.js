import React from "react"

function List(prop){
  return (
    <ul>
    <li>Post 1</li> 
    <li> Post 2</li>
    <li>Post 3</li> 
    <li> Post 4</li>
    </ul>
  )
}

/*This is how you would fetch data

class App extends React.Component{
    constructor(props){
      super();
      this.state= {
        posts: [],
        display: "",
        
      }
    }
    componentDidMount(){
      fetch("'https://jsonplaceholder.typicode.com/posts'")
      .then(res=> res.json())
      .then(result =>{
        this.setState({
          posts: result,
          display: "",
          
        })
      })
    }
  
    render(){
      const {posts} =this.state;
  
      return (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
  */ 

  export default List