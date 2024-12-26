import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import Extra from '../components/Extra';
import Latest from '../components/Latest';

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
        </div>
    );
};

export default Home;