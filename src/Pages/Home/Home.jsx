import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;