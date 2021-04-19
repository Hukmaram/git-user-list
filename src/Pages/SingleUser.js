import React from "react";
import { useHistory } from "react-router-dom";
import "../Pages/SingleUser.css"
const SingleUser=({user})=>{
    const history=useHistory()
    const handleClick=(user)=>{
        console.log(user)
        history.push({
            pathname: '/details',
            state: {id:user.id}
          }); 
    }
    return(
        <h4 className="list-style" onClick={()=>handleClick(user)}>{user.login}</h4>
    )
}
export default SingleUser;