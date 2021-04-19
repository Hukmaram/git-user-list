import React, { useEffect, useState } from 'react';
import{connect} from "react-redux";
import { fetchUser } from '../Redux/userAction';
import SingleUser from "../Pages/SingleUser";
import { useHistory } from 'react-router-dom';

function Dahsboard({userData,fetchMyUser}) {
    useEffect(()=>{
        fetchMyUser()
    },[])
    // const [details, setDetails]=useState();
    // const handleClick=(user)=>{

    // }
    const history =useHistory()
    const logout=()=>{
        //handle logout here
        history.push("/")
    }
   return(
      <React.Fragment>
          <div style={{textAlign:"end",padding:"5px",backgroundColor:"green", color:"white",cursor:"pointer"}} onClick={()=>{logout()}}>Log Out</div>
          <h1 style={{textAlign:"center",color:"red"}}>User List</h1>
          {userData.loading?<h1>Loading...</h1>:userData.error?<h1>{userData.error}</h1>:<div>
              {userData && userData.users && userData.users.map(user => <SingleUser user={user} key={user.id} />)}
              </div>}
      </React.Fragment>
   )
}
const mapStateToProps=(state)=>{
    return {


        userData:state.user
    }
}
const mapDisptachToProps=(dispatch)=>{
    return{
     fetchMyUser:()=>dispatch(fetchUser())
    }
}
export default connect(mapStateToProps,mapDisptachToProps)(Dahsboard)
