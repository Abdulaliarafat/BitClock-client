import React from 'react';

const Nearly = ({nearly}) => {
    // console.log(nearly)
    return (
        <div className='border-3 border-amber-600 rounded-xl bg-gradient-to-b from-white to-yellow-100 shadow-2xl mx-12 md:mx-8 lg:mx-0 px-4 lg:px-2'>
            <div>
                <img className='w-50 h-30 px-2 my-1 mx-auto object-cover' src={nearly.photoURL} alt="" />
            </div>
            <div className='mt-2 relative ml-4'>
                <p className='font-semibold text-xl'>Food : {nearly.foodtitle}</p>
                <p className='font-medium text-md text-gray-600'>Category : {nearly.foodcategory}</p>
                <p className='font-medium text-md text-gray-600'>Quantity : {nearly.quantity}</p>
                <p className='font-medium text-md text-gray-600 '>Expiry date : {nearly.expirydate}</p>
                {/* {
                    expiration && <span className='text-xs ml-1 text-white px-3 py-1.5 rounded-2xl font-bold bg-red-600 mt-2 absolute top-17 right-2 md:right-10'> Expired</span> 
                } */}
            
            </div>
            <button className='btn w-30 ml-4 mb-2 bg-gradient-to-r from-yellow-600 to-green-700 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-yellow-800 hover:to-green-800 mt-3 font-bold'>See Details</button>
        </div>
    );
};

export default Nearly;