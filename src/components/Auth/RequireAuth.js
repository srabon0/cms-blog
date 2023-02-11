import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const user = useSelector((state)=>state.users.currentUser)
    console.log(user);
    const location = useLocation()
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace /> 
    }
    return children;
}

export default RequireAuth;