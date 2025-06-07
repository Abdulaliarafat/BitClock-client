import React from 'react';
import {  FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosContact } from 'react-icons/io';
import { NavLink } from 'react-router';
// import logo from '/Food.jpg'
import { SiIfood } from 'react-icons/si';

const Navber = () => {
    const link = <>
        <li><NavLink to='/' className={({ isActive }) => `md:px-10 mt-1 py-2 font-bold text-md md:text-white ${isActive ? 'bg-yellow-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => `md:px-10 mt-1 py-2 font-bold text-md md:text-white ${isActive ? 'bg-yellow-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}>Fridge</NavLink></li>
        <li><NavLink className={({ isActive }) => `md:px-10 mt-1 py-2 font-bold text-md md:text-white ${isActive ? 'bg-yellow-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}>Add Food</NavLink></li>
        <li><NavLink className={({ isActive }) => `md:px-10 mt-1 py-2 font-bold text-md md:text-white ${isActive ? 'bg-yellow-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`}> My Items</NavLink></li>
    </>
    return ( 
        <div>
            <div className=" bg-base-100 shadow-xl">
                <div className=" bg-black md:px-4">
                    <div className='flex justify-between items-center pt-2 md:pt-5'>
                        <div className='md:flex md:gap-2'>
                            <p className='font-semibold md:ml-0 ml-12 hover:underline text-white'>📍Level-4,34,Awal Centre,Banani,Dhaka</p>
                            <p className='font-semibold text-center ml-10 hover:underline text-white'>📞 61 089 988</p>
                        </div>
                        <div className='hidden md:flex gap-4'>
                            <FaFacebook className='text-white  hover:text-blue-400' size={25}></FaFacebook>
                            <FaXTwitter className='text-white hover:text-gray-400' size={25}></FaXTwitter>
                            <FaInstagram className='text-white hover:text-red-400' size={25}></FaInstagram>
                            <FaWhatsapp className='text-white hover:text-green-400' size={25}></FaWhatsapp>
                        </div>
                    </div>
                    <div className="dropdown my-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white font-bold lg:hidden bg-yellow-500 ml-45 hover:text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-100 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                </div>
               <div className='bg-green-900'>
                 <div className='flex justify-evenly items-center py-4 border-b-gray-500 border-1'>
                    <div className='flex justify-center items-center gap-2'>
                        <SiIfood className='text-yellow-400 ' size={60} />
                        <a className="font-bold md:text-3xl text-white">BiteClock</a>
                    </div>
                    <div className=" space-x-3 md:space-x-10">
                        <button className='btn w-20 md:w-30 bg-yellow-500 text-white font-bold hover:bg-orange-500 hover:text-white hover:rounded-xl'>SignIn</button>
                        <button className='btn w-20 md:w-30 bg-yellow-500 text-white font-bold hover:bg-orange-500 hover:text-white hover:rounded-xl'>Register</button>
                    </div>
                    <div>
                        <IoIosContact className='text-white' size={60} />
                    </div>
                </div>
                <div className=" hidden lg:flex justify-evenly items-center py-3">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        {link}
                    </ul>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Navber;