import React, { Suspense, use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Items from './Items';
import Loading from '../../Shared/Loading';
import { MyItemsPromise } from '../../API/MyItem';

const MyItem = () => {
    const { user } = use(AuthContext);
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <Items MyItemsPromise={MyItemsPromise(user?.email)}></Items>
            </Suspense>
        </div>
    );
};

export default MyItem;