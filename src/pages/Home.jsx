import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import Extra from '../components/Extra';
import Latest from '../components/Latest';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
           <Banner></Banner>
           <Latest></Latest>
           <Extra></Extra>
        </div>
    );
};

export default Home;