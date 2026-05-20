// import React from 'react';

import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
    const {user}=use(AuthContext);
    if(!user){
        <Navigate to='/register'></Navigate>
    }

    return children
};

export default PrivateRoute;