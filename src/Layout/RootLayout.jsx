import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import { ThemeProvider } from '../../DarkMode/ThemeProvider';

const RootLayout = () => {
    return (
        <div>
            <ThemeProvider>
                <Navber></Navber>
                <Outlet></Outlet>
                <Footer></Footer>
            </ThemeProvider>
        </div>
    );
};

export default RootLayout;