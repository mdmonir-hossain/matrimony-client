import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import { Helmet } from 'react-helmet';
import HomePremiumMemberCard from '../../Components/HomePremiumMemberCard/HomePremiumMemberCard';
import SuccessCounter from '../../Components/Header/SuccessCounter/SuccessCounter';
import SuccessStory from '../../Components/SuccessStory/SuccessStory';
import HowWebsitesWork from '../../Components/HowWebsitesWork/HowWebsitesWork';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <HowWebsitesWork></HowWebsitesWork>
            <HomePremiumMemberCard></HomePremiumMemberCard>
            <SuccessCounter></SuccessCounter>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;