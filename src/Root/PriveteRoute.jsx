/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRoute = ({ children }) => {
    const { user, loading } = useContext(Context)
    const location = useLocation()
    
    if(loading){
        return <span className="loading loading-spinner loading-lg "></span>

    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PriveteRoute;