import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Shared/Loading';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location=useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to='/logIn'></Navigate>
};

export default PrivateRoute;