import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiIfood } from 'react-icons/si';
import img from '/footer.jpg';
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <div className='relative'>
            <div className=''>
                <img className=' w-full h-258 md:h-[630px] lg:h-[450px] object-cover' src={img} alt="" />
            </div>
            <div className='md:flex justify-around items-start py-10 absolute -top-7 md:top-3'>
                <div className='px-3'>
                    <div className='flex gap-2'>
                        <span> <SiIfood className='text-yellow-400 ' size={60} /></span>
                        <h1 className='font-bold text-2xl text-yellow-400'>About BiteClock</h1>
                    </div>
                    <p className='font-medium text-md text-white '>Our Food Expiry Tracker helps you monitor<br />expiration  dates reduce food waste and stay<br />organized .Get timely alerts,manage your pantry <br />smartly and make healthier,cost-effective choices<br />every day.Ideal for homes,stores and <br />food businesses.</p>
                </div>
                <div className='lg:space-y-1 md:px-3 mt-2 md:mt-0'>
                    <h1 className='font-bold text-2xl text-yellow-400 mb-2 ml-2 md:ml-0'>🌿Working for</h1>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>1.Prevents food waste by tracking expiration dates accurately.</p>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>2.Sends timely alerts to consume food before expiry.</p>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>3.Helps save money by avoiding spoiled food purchases.</p>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>4.Improves food safety by reducing risk of contaminatio</p>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>5.Organizes pantry items for easy inventory management.</p>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>6.Supports healthy eating habits with fresh food reminders</p>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>7.Reduces stress by automating food expiry monitoring.</p>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>8.Provides detailed reports on food usage and expiry.</p>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>9.Accessible anytime,anywhere through any platforms.</p>
                    <p className='font-medium text-md text-white ml-2 md:ml-0'>10.Eco-friendly by promoting efficient food consumption habits.</p>
                </div>
                <div className='md:px-3' >
                    <h1 className='font-bold text-2xl text-yellow-400 my-2  ml-2 md:ml-0'>💬Connect with us</h1>
                    <div className=''>
                        <div className='space-y-1'>
                            <p className='font-semibold  hover:underline text-white ml-2 md:ml-0'>📍Location : Level-4,34,Awal Centre,Banani,Dhaka</p>
                            <p className='font-semibold hover:underline text-white ml-2 md:ml-0'>📞 Phone : 61 089 988</p>
                            <p className='font-semibold hover:underline text-white ml-2 md:ml-0'>📮Email : Support@BiteClock.com</p>
                        </div>
                        <div className='lg:flex justify-start items-center gap-3 md:mt-5 ml-2 mt-2'>
                            <div className=' flex mt-0 md:mt-5 lg:mt-0 gap-5'>
                                <FaFacebook className='  hover:text-blue-400 text-white' size={25}></FaFacebook>
                                <FaXTwitter className=' hover:text-gray-400 text-white' size={25}></FaXTwitter>
                                <FaInstagram className=' hover:text-red-400 text-white' size={25}></FaInstagram>
                                <FaWhatsapp className=' hover:text-green-400 text-white' size={25}></FaWhatsapp>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-bold text-2xl text-yellow-400 my-2'>✨ Explore us</h1>
                            <div>
                                <ul  className='ml-4 md:ml-0'>
                                    <li><NavLink to='/' className={({ isActive }) => `md:px-10 mt-1 py-2 font-bold text-md  md:text-white ${isActive ? 'underline text-white' : ''}`}>Home</NavLink></li>
                                <li><NavLink to='fridge' className={({ isActive }) => `md:px-10 mt-1 py-2 font-bold text-md md:text-white ${isActive ? 'underline text-white' : ''}`}>Fridge</NavLink></li>
                                <li><NavLink to='/addFood' className={({ isActive }) => `md:px-10 mt-1 py-2 font-bold text-md md:text-white ${isActive ? 'underline text-white' : ''}`}>Add Food</NavLink></li>
                                <li><NavLink to='/myItem' className={({ isActive }) => `md:px-10 mt-1 py-2 font-bold text-md md:text-white ${isActive ? 'underline text-white' : ''}`}> My Items</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='font-medium text-md mt-20  md:mt-19 text-white absolute top-228 md:top-128 lg:top-85'> © 2024 BiteClock. All rights reserved.</p>
        </div>

    );
};

export default Footer;