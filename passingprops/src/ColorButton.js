import React from "react"
import App from './App';

//This function changes the color of the background
function ColorButton(props){
    console.log("Coming from the ${props.color} button")
    console.log({props})

    return(
        <button onClick={(evt)=>{
            props.changeColor(props.color) //The change background takes a color as its argument. So I pass a color from props to the change color method. 
        }}> Change to {props.color} </button>
    )
}

export default ColorButton