import React from 'react';

const ExpirationCount = ({expirydate}) => {
    // CountDown days to Expired
    const now = new Date();
    const expiry = new Date(expirydate);
    const diff = (expiry - now)
    //   convert day to hours,minutes,second....
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return (
        <div>
         { diff > 0? <span className='font-bold text-md text-green-600'>Remaining time : {hours}h {minutes}m {seconds}s</span>: <span className='text-xs ml-2 text-white px-3 py-1.5 rounded-2xl font-bold bg-red-600'>Expired</span>}
        </div>
    );
};

export default ExpirationCount;