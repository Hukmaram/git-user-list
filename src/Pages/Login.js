import React, { useContext, useState } from "react";
import "../Pages/Login.css"
import { useHistory } from "react-router-dom";
const Login=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    let history =useHistory();
    const credentials={
        username:'1234',
        password:'1234'
    }
    console.log(typeof(credentials))
 const handleSubmit=()=>{
  if(credentials.username===username && credentials.password===password){
      console.log(credentials);
    // return <Redirect to="dashboard" />
    // context.setUser({...credentials})
    history.push("/dashboard");
  }
  else{
      alert("Incorrect username or password");
  }
 }
return(
    <React.Fragment>
        <div className="login-container">
           <h1 className="login-header">Login Page</h1>
            <input 
            type="text" 
            name="username" 
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            className="login-input"  
            placeholder="Enter username"/>
            <input 
            type="password" 
            name="password" 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="login-input" 
            placeholder="Enter password" />
            <button type="submit" onClick={handleSubmit}className="btn">Login</button>
        </div>
    </React.Fragment>
)

}

export default Login