import React from 'react';
import {createBrowserRouter,
} from "react-router";
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import LoginPage from '../Pages/LoginPage';
import Register from '../Pages/Register';
import AddFood from '../Pages/AddFood';
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    errorElement:<Error></Error>,
    children:[
      {index:true,Component:Home},
      {path:'/logIn',Component:LoginPage},
      {path:'/register',Component:Register},
      {path:'/addFood',Component:AddFood}
    ]
  },
]);

export default router;