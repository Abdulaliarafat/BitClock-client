import React, { useEffect, useState } from 'react';

const ExpirationCount = ({ expirydate }) => {
  const calculateTimeLeft = () => {
    const now = new Date()
    const expiry = new Date(expirydate);

    const nowDateOnly = now.toISOString().slice(0, 10);
    const expiryDateOnly = expiry.toISOString().slice(0, 10);

    if (nowDateOnly >= expiryDateOnly) return null;

    const diff = expiry - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days,hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, [expirydate]);

  return (
    <>
      {timeLeft ? (
        <span className='font-bold text-md text-green-600'>
          Remaining time :  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      ) : (
        <span className='text-xs ml-2 text-white px-3 py-1.5 rounded-2xl font-bold bg-red-600'>
          Expired
        </span>
      )}
    </>
  );
};

export default ExpirationCount;
