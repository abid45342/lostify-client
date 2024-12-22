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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/Lostfound",
        element:<LostFound></LostFound>,
        loader:()=>fetch('http://localhost:5000/items')
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
        path:'/recovered-items',
        element:<PrivateRoute><RecoveredItems></RecoveredItems></PrivateRoute>
      },

      {
        path:'/my-items',
        element:<PrivateRoute>
          <MyItems></MyItems>
        </PrivateRoute>
      }


    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
