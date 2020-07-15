import React from "react"
import { unstable_renderSubtreeIntoContainer } from "react-dom"

function UserList(props){
let users =[
    {name: "Bo Jangles", desc:"A sad banjo clown"},
    {name: "Mr. Mustard", desc:"Very mean. Probably a murder."},
    {name: "Sam", desc:"Just some British fellow"},
    {name: "Ms. Plum", desc:"Very much enjoys the color purple. "}
]
    return (
        <div>
            {users.map((user)=>{
                return <li><b>{user.name}</b>{user.desc} </li>
            })}
        </div>
    )
}

export default UserList