import React from 'react';
import useAxiousSecure from '../Hooks/useAxiousSecure';

const useMyItemsAPI = () => {
    const axiousSecure=useAxiousSecure();
    const MyItemsPromise=(email)=>{
        return axiousSecure.get(`/food/email?email=${email}`).then(res=>res.data)
    }
    return {MyItemsPromise}
};

export default useMyItemsAPI;