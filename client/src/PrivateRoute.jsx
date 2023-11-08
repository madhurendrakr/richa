import React from 'react'
import {Navigate, useLocation} from "react-router-dom"


const PrivateRoute = ({children}) => {
   const data = localStorage.getItem("userID")
    let location = useLocation();
    // const user = useSelector((state)=>state.user);
    if(!data){
        return <Navigate to="/login" state={{ from: location}} replace />
    }
  return (
    children
  )
}

export default PrivateRoute