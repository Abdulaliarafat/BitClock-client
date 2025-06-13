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
    hydrateFallbackElement:<Loading></Loading>,
    children: [
      {
         index: true, 
         Component: Home,
         hydrateFallbackElement:<Loading></Loading>
         },
      { path: '/logIn', Component: LoginPage },
      { path: '/register', Component: Register },

      { path: '/addFood', element: <PrivateRoute><AddFood></AddFood></PrivateRoute> },
      {
        path: '/fridge',
        Component: Fridge,
        // loader: () => fetch('https://assignment-11-server-steel-six.vercel.app/food'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/foodDetails/:id',
        Component: FoodDetails,
        loader: ({ params }) => fetch(`https://assignment-11-server-steel-six.vercel.app/food/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/myItem',
        element: <PrivateRoute>
          <MyItem></MyItem>
        </PrivateRoute>,
      },
    ]
  },
]);

export default router;