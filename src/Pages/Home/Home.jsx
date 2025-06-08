import React, { Suspense, use } from 'react';
import NearlyExpo from './NearlyExpo';
import Banner from '../Banner';
import Loading from '../../Shared/Loading';


const NearlyExpoPromise = fetch('http://localhost:3000/food/nearly').then(res => res.json())

const Home = () => {
    const nearlyExpo = use(NearlyExpoPromise)
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>
                <NearlyExpo nearlyExpo={nearlyExpo}></NearlyExpo>
            </Suspense>
        </div>
    );
};

export default Home;