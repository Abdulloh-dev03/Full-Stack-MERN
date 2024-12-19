import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Error from './Error/Error'
import Create from './Pages/Create'
const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<Layout/>,
            errorElement:<Error/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:"/create",
                    element:<Create/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App