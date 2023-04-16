import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return<progress className="progress w-8 "></progress>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoutes;