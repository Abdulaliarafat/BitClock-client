import React, { use } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {  IoMdContact } from 'react-icons/io';
import { Link, NavLink, useNavigate } from 'react-router';
import { SiIfood } from 'react-icons/si';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Navber = () => {
    const { user, LogOut } = use(AuthContext)
    const navigate = useNavigate()
    const handleSignOut = () => {
        LogOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Logout successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const link = <>
        <li><NavLink to='/' className={({ isActive }) => `md:px-8 mt-1 py-1 font-semibold text-md  md:text-white ${isActive ? 'bg-yellow-600 text-white' : 'hover:bg-orange-400 hover:text-white'}`}>Home</NavLink></li>
        <li><NavLink to='/fridge' className={({ isActive }) => `md:px-8 mt-1 py-1 font-semibold text-md  md:text-white ${isActive ? 'bg-yellow-600 text-white' : 'hover:bg-orange-400 hover:text-white'}`}>Fridge</NavLink></li>
        {
            user && <>
                <li><NavLink to='/addFood' className={({ isActive }) => `md:px-8 mt-1 py-1 font-semibold text-md  md:text-white ${isActive ? 'bg-yellow-600 text-white' : 'hover:bg-orange-400 hover:text-white'}`}>Add Food</NavLink></li>
                <li><NavLink to='/myItem' className={({ isActive }) => `md:px-8 mt-1 py-1 font-semibold text-md  md:text-white ${isActive ? 'bg-yellow-600 text-white' : 'hover:bg-orange-400 hover:text-white'}`}> My Items</NavLink></li>
            </>
        }
    </>
    return (
        <div>
            <div className=" bg-base-100 shadow-xl ">
                <div className=" bg-black md:px-5 ">
                    <div className='flex justify-between items-center pt-2'>
                        <div className='md:flex md:gap-1 pt-2'>
                            <p className='font-medium md:ml-0 ml-12 hover:underline text-white'>📍Level-4,34,Awal Centre,Banani,Dhaka</p>
                            <p className='font-medium  text-center ml-10 hover:underline text-white'>📞 61 089 988</p>
                        </div>
                        <div className='hidden md:flex gap-4'>
                            <FaFacebook className='text-white  hover:text-blue-400' size={25}></FaFacebook>
                            <FaXTwitter className='text-white hover:text-gray-400' size={25}></FaXTwitter>
                            <FaInstagram className='text-white hover:text-red-400' size={25}></FaInstagram>
                            <FaWhatsapp className='text-white hover:text-green-400' size={25}></FaWhatsapp>
                        </div>
                    </div>
                    <div className="dropdown mb-1">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white font-bold md:hidden bg-yellow-500  ml-5 my-1 md:my-4  md:w-[100px] hover:text-green-500">
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
                    <div className='flex justify-evenly items-center py-0.5 border-b-gray-500 border-1'>
                        <div className='flex justify-center items-center gap-2'>
                            <SiIfood className='text-yellow-400 ' size={40} />
                            <a className="font-bold md:text-xl text-white">BiteClock</a>
                        </div>
                        <div className=" space-x-3 md:space-x-10">
                            {
                                user ? <Link onClick={handleSignOut} className='btn w-22 h-7 md:w-23 md:h-8 bg-yellow-600 text-white font-semibold hover:bg-orange-500 hover:text-white hover:rounded-xl'>Sign out</Link> : <div className=' space-x-3 md:space-x-10'>
                                    <Link to='/logIn' className='btn w-15 h-7 md:w-20 md:h-8 bg-yellow-600 text-white font-semibold hover:bg-orange-500 hover:text-white hover:rounded-xl'>SignIn</Link>
                                    <Link to='/register' className='btn w-15 h-7 md:w-20 md:h-8 bg-yellow-600 text-white font-semibold hover:bg-orange-500 hover:text-white hover:rounded-xl'>Register</Link>
                                </div>
                            }

                        </div>
                        <div>
                            {user ? (
                                <Link to="" className="relative group inline-block">
                                    <img
                                        className="w-14 mr-3 mt-1 bg-white rounded-xl"
                                        src={user?.photoURL}
                                        alt=''
                                    />
                                    <span className="absolute right-5 transform -translate-x-1/2 -top-1
                           bg-gray-200 bg-opacity-75  font-semibold text-green-500 px-4 py-1 rounded-full
                           opacity-0 group-hover:opacity-100
                           pointer-events-none
                           whitespace-nowrap
                           transition-opacity duration-300 ">
                                        {user?.displayName}
                                    </span>
                                </Link>
                            ) : (
                                <IoMdContact color="white" size={50} />
                            )}
                        </div>
                    </div>
                    <div className=" hidden md:flex justify-evenly items-center ">
                        <ul className="menu menu-horizontal px-1 gap-10 py-2">
                            {link}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;