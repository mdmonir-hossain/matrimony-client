import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import { Helmet } from 'react-helmet';
import HomePremiumMemberCard from '../../Components/HomePremiumMemberCard/HomePremiumMemberCard';
import SuccessCounter from '../../Components/Header/SuccessCounter/SuccessCounter';
import SuccessStory from '../../Components/SuccessStory/SuccessStory';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <HomePremiumMemberCard></HomePremiumMemberCard>
            <SuccessCounter></SuccessCounter>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;