import React from 'react';
import { Link } from 'react-router';

const BeFore = ({before}) => {
    console.log(before)
    return (
         <div className='border-4 border-red-700 rounded-xl bg-gradient-to-b from-white to-red-100 shadow-2xl mx-12 md:mx-8 lg:mx-0 px-4 lg:px-2'>
            <div>
                <img className='w-50 h-30 px-2 my-1 mx-auto object-cover' src={before.photoURL} alt="" />
            </div>
            <div className='mt-2 relative ml-4'>
                <p className='font-semibold text-xl'>Food : {before.foodtitle}</p>
                <p className='font-medium text-md text-gray-600'>Category : {before.foodcategory}</p>
                <p className='font-medium text-md text-gray-600'>Quantity : {before.quantity}</p>
                <p className='font-medium text-md text-gray-600 '>Expiry date : {before.expirydate} <span className='text-xs ml-1 text-white px-3 py-1.5 rounded-2xl font-bold bg-red-600 mt-2 absolute top-17 right-2 md:right-10'>{before.status}</span></p>
            </div>
            <Link  to={`/foodDetails/${before._id}`} className='btn w-30 ml-4 mb-2 bg-gradient-to-r from-red-500 to-red-600 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-red-700 hover:to-red-700 mt-3 font-bold'>See Details</Link>
        </div>
    );
};

export default BeFore;