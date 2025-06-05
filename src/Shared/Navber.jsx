import React from 'react';
import { NavLink } from 'react-router';

const Navber = () => {
    const link=<>
   <li><NavLink to='/' className={({ isActive }) => `ml-5 font-bold text-md md:text-white ${isActive ? 'bg-yellow-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}>Home</NavLink></li>
   <li><NavLink  className={({ isActive }) => `ml-5 font-bold text-md md:text-white ${isActive ? 'bg-yellow-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}>Fridge</NavLink></li>
   <li><NavLink  className={({ isActive }) => `ml-5 font-bold text-md md:text-white ${isActive ? 'bg-yellow-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}>Add Food</NavLink></li>
   <li><NavLink  className={({ isActive }) => `ml-5 font-bold text-md md:text-white ${isActive ? 'bg-yellow-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}> My Items</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                   <div>
                     <a className="font-bold text-2xl">BiteClock</a>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;