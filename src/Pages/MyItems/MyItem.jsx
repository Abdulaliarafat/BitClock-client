import React, { Suspense, use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Items from './Items';
import Loading from '../../Shared/Loading';
// import { MyItemsPromise } from '../../API/MyItem';
import useMyItemsAPI from '../../API/useMyItemsAPI';

const MyItem = () => {
    const { user } = use(AuthContext);
    const{MyItemsPromise}=useMyItemsAPI()
    // console.log(user.accessToken)
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <Items MyItemsPromise={MyItemsPromise(user?.email)}></Items>
            </Suspense>
        </div>
    );
};

export default MyItem;