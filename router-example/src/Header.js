import React from "react"
import {Link} from "react-router-dom"

function Header(props){
    return (
        <div id="header">
            
            <Link className="nav" to={"/"}>Home</Link>
            <Link className="nav" to={"/about"}>About</Link>
            <Link className="nav" to={"/creative"}>Creative</Link>
            <br></br>
          
        </div>
    )
}

export default Header