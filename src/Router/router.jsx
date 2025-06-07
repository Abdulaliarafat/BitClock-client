import React from 'react';
import {createBrowserRouter,
} from "react-router";
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    errorElement:<Error></Error>,
    children:[
      {index:true,Component:Home}
    ]
  },
]);

export default router;