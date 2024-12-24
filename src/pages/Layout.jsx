import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto text-center '>
           <div  >
           <Navbar></Navbar>
           <Outlet></Outlet>
           </div>
        
         <Footer></Footer>
        
            

            
        </div>
    );
};

export default Layout;