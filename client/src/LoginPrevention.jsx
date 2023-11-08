import React from 'react'
import {Navigate, useLocation} from "react-router-dom"


const PrivateRoute = ({children}) => {
   const data = localStorage.getItem("user_data")
    let location = useLocation();
    // const user = useSelector((state)=>state.user);
    if(data){
        return <Navigate to="/" state={{ from: location}} replace />
    }
  return (
    children
  )
}

export default PrivateRoute