import React from 'react';
import {createBrowserRouter,
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
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    errorElement:<Error></Error>,
    children:[
      {index:true,Component:Home},
      {path:'/logIn',Component:LoginPage},
      {path:'/register',Component:Register},
      {path:'/addFood',element:<PrivateRoute><AddFood></AddFood></PrivateRoute>},
      {
        path:'/fridge',
        Component:Fridge,
        loader:()=>fetch('http://localhost:3000/food'),
        hydrateFallbackElement:<Loading></Loading>
      },
    ]
  },
]);

export default router;