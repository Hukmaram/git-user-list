import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'
import "../Pages/Details.css"
function Details() {
    const location = useLocation();
    let id=location.state.id;
    const fetchUserById=(state,id)=>{
        return state.user.users.find(user=>user.id===id)
     }
    const data=useSelector(state=>fetchUserById(state,id))
     
    const history=useHistory();
    const goBack=()=>{
        history.goBack()
    }
    return (
            <div className="details-container">
                <h1>Individual User Profile</h1>
                <img src={data.avatar_url} width="200px" height="200px" />
                <div className="collectiontitle"><b>Name-</b> {data.login}</div>
                <div className="collectiontitle"><b>Repos Url-</b> {data.repos_url}</div>
                <div className="collectiontitle"><b>Followers Url-</b> {data.followers_url}</div>
                <div className="collectiontitle"><b>Following Url-</b> {data.following_url}</div>
                <div className="collectiontitle"><b>Organizations Url-</b> {data.organizations_url}</div>
            
                <button className="btn" onClick={()=>goBack()} style={{textDecoration:"none",backgroundColor:"#28a745",color:"white"}}>
                    Go Back</button>
            </div>
    )
}

export default Details

