import React from 'react';
import InfoForm from './InfoForm';
import DisplayData from './DisplayData';
import { createBrowserRouter, Link, NavLink, RouterProvider } from 'react-router-dom';
import Layout from './Layout';

import { ChakraProvider } from '@chakra-ui/react'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[{
        path:"",
        element:<DisplayData />
      },
      {
        path:"add",
        element:<InfoForm />
      }
    ]
  }
])

function App() {
  return (
    <ChakraProvider>

    <div className='bg-gradient-to-r from-gray-800 to-black min-h-screen '>
          <RouterProvider router={router} />
    </div>
    </ChakraProvider>
  );
}

export default App;
