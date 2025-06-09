import React, { Suspense, use } from 'react';
import NearlyExpo from './NearlyExpo';
import Banner from '../Banner';
import Loading from '../../Shared/Loading';
import Expired from './Expired';

// NearlyExpo JSON
const NearlyExpoPromise = fetch('http://localhost:3000/food/nearly').then(res => res.json())
// expired JSON
const expiredPromise = fetch('http://localhost:3000/food/nearly?type=expired').then(res => res.json())



const Home = () => {
    const nearlyExpo = use(NearlyExpoPromise)
    const expire = use(expiredPromise)
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>
                <NearlyExpo nearlyExpo={nearlyExpo}></NearlyExpo>
                <Expired expire={expire}></Expired>
            </Suspense>
        </div>
    );
};

export default Home;