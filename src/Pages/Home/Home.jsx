import React, { Suspense, use } from 'react';
import NearlyExpo from './NearlyExpo';
import Banner from '../Banner';
import Loading from '../../Shared/Loading';
import Expired from './Expired';
import UseExpired from './ExtraSection/UseExpired';
import LiteStyle from './ExtraSection/LifeStyle/LiteStyle';

// NearlyExpo JSON
const NearlyExpoPromise = fetch('https://assignment-11-server-steel-six.vercel.app/food/nearly').then(res => res.json());
// expired JSON
const expiredPromise = fetch('https://assignment-11-server-steel-six.vercel.app/food/nearly?type=expired').then(res => res.json());



const Home = () => {
    const nearlyExpo = use(NearlyExpoPromise)
    const expire = use(expiredPromise)
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <Banner></Banner>
                <NearlyExpo nearlyExpo={nearlyExpo}></NearlyExpo>
                <Expired expire={expire}></Expired>
                <UseExpired></UseExpired>
                <LiteStyle></LiteStyle>
            </Suspense>
        </div>
    );
};

export default Home;