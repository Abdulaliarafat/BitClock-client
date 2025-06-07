import React from 'react';

const Loading = () => {
    return (
         <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-bars loading-xs text-yellow-400"></span>
            <span className="loading loading-bars loading-sm text-yellow-400"></span>
            <span className="loading loading-bars loading-md text-yellow-400"></span>
            <span className="loading loading-bars loading-lg text-yellow-400"></span>
            <span className="loading loading-bars loading-xl text-yellow-400"></span>
        </div>
    );
};

export default Loading;