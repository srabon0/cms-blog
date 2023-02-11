import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const Admin = ({children}) => {
    const user = useSelector((state)=>state.users.currentUser)
    console.log(user);
    const location = useLocation()
    if(user.role==="admin"){
        return children; 
    }
    return <Navigate to="/login" state={{from:location}} replace /> 
};

export default Admin;