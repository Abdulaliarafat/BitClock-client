import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-10' >
                <Navber></Navber>
            </header>
            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default RootLayout;