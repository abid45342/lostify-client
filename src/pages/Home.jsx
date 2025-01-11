import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import Extra from '../components/Extra';
import Latest from '../components/Latest';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='px-5'>
            <Helmet>
                <title>Home</title>
            </Helmet>
           <div className=''>
           <Banner></Banner>
           </div>
           <Latest></Latest>
           <Extra></Extra>
        
           <section className="bg-teal-500   text-white py-12 my-5">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Lost something? Found something?</h2>
    <p className="text-lg mb-6">
      Join our community to report lost items, find their rightful owners, or claim what you've lost.
    </p>
    <div className="flex justify-center gap-4">
      <Link to="/add-item" className="btn btn-primary text-teal-500 bg-white hover:bg-teal-100">
        Report Lost Item
      </Link>
      <Link to="/login" className="btn btn-outline text-white border-white hover:bg-white hover:text-teal-500">
        Get Started
      </Link>
    </div>
  </div>
</section>


         
        </div>
    );
};

export default Home;