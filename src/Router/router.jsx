import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Layout/RootLayout';
import Error from '../Pages/Error';
import LoginPage from '../Pages/LoginPage';
import Register from '../Pages/Register';
import AddFood from '../Pages/AddFood';
import Fridge from '../Pages/Fridge/Fridge';
import PrivateRoute from '../AuthProvider/PrivateRoute';
import Loading from '../Shared/Loading';
import Home from '../Pages/Home/Home';
import FoodDetails from '../Pages/Fridge/FoodDetails';
import MyItem from '../Pages/MyItems/MyItem';
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    HydrateFallback:Loading,
    children: [
      {
         index: true, 
         Component: Home,
         hydrateFallbackElement:<Loading></Loading>
         },
      { path: '/logIn', Component: LoginPage ,HydrateFallback:Loading},
      { path: '/register', Component: Register ,HydrateFallback:Loading},

      { path: '/addFood', element: <PrivateRoute><AddFood></AddFood></PrivateRoute> },
      {
        path: '/fridge',
        Component: Fridge,
        HydrateFallback:Loading,
        // loader: () => fetch('https://bitclock-server.vercel.app/food'),
      },
      {
        path: '/foodDetails/:id',
        Component: FoodDetails,
        HydrateFallback:Loading,
        loader: ({ params }) => fetch(`https://bitclock-server.vercel.app/food/${params.id}`),
       
      },
      {
        path: '/myItem',
        element: <PrivateRoute>
          <MyItem></MyItem>
        </PrivateRoute>,
        HydrateFallback:Loading
      },
    ]
  },
]);

export default router;