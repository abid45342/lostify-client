import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import LostFound from './pages/LostFound.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import AddItems from './pages/AddItems.jsx';
import RecoveredItems from './pages/RecoveredItems.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import MyItems from './pages/MyItems.jsx';
import ItemDetails from './pages/ItemDetails.jsx';
import UpdateItem from './pages/UpdateItem.jsx';
import Error from './pages/Error.jsx';
import axios from 'axios';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/Lostfound",
        element: <LostFound />, // Directly reference 
      },
      
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path:'/add-item',
        element:<PrivateRoute><AddItems></AddItems></PrivateRoute>

      },
      {
        path: '/allrecovered',
        element: <RecoveredItems />
      },

      {
        path:'/my-items',
        element:<PrivateRoute>
         
         <MyItems></MyItems>
      
        </PrivateRoute>,
       
      },
      {
        path:'/itemDetails/:id',
        element:<PrivateRoute>
          <ItemDetails></ItemDetails>
        </PrivateRoute>,
        loader:({params})=>{
          return axios.get(`http://localhost:5000/items/${params.id}`,{withCredentials:true})
          .then(res=>res.data)
        }
       
        
      },
      {
        path:'/updateItem',
        element:<PrivateRoute>
          <UpdateItem></UpdateItem>
        </PrivateRoute>
      }
 


    ]

  },
  {
    path: "*",
    element:<Error></Error>
  }

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
