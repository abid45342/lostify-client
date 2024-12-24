import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div >
           <div className='max-w-6xl mx-auto text-center ' >
           <Navbar></Navbar>
           <Outlet></Outlet>
           </div>
        
         <Footer></Footer>
        
            

            
        </div>
    );
};

export default Layout;