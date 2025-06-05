import React from 'react';
import {createBrowserRouter,
} from "react-router";
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {index:true,Component:Home}
    ]
  },
]);

export default router;