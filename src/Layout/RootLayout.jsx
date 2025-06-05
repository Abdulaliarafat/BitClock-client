import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;