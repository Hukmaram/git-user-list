import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from '../Redux/userTypes'
import axios from "axios";


  export const fetchUserRequest=()=>{
      return {
          type:FETCH_USERS_REQUEST
      }
  }
  export const fetchUserSuccess=(users)=>{
      return{
        type:FETCH_USERS_SUCCESS,
        payload:users
      }
  }
  export const fetchUserFailure=(error)=>{
    return{
      type:FETCH_USERS_FAILURE,
      payload:error
    }
}
export const fetchUser=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get('https://api.github.com/users')
        .then(response=>{
         const user=response.data;
         console.log(user)
         dispatch(fetchUserSuccess(user))
        })
        .catch(error=>{
            const errMsg=error.message;
            dispatch(fetchUserFailure(errMsg))
        })
    }
}
