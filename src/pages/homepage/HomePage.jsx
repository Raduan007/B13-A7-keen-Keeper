import React from 'react';
import Banner from '../../components/homepage/Banner';
import Cards from '../../components/homepage/Cards';
import FriendsData from '../../components/homepage/FriendsData';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Cards/>
            <FriendsData/>
        </div>
    );
};

export default HomePage;