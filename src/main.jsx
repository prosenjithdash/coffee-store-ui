import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import AddCoffee from './Pages/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './Pages/UpdateCoffee/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:2000/coffee')
      },
      {
        path: 'addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path: 'updateCoffee',
        element:<UpdateCoffee></UpdateCoffee>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
