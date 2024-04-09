import React from 'react';
import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';


const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    
   
    if(loader){
        return <div className='flex justify-center items-center h-[60vh]'>
            <span className="loading loading-spinner loading-lg flex justify-center"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/signin"></Navigate>
};

export default PrivateRoutes;