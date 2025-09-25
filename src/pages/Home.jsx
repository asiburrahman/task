import React from 'react';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Services from '../component/Services';
import BuildForEveryone from '../component/BuildForEveryone';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <BuildForEveryone></BuildForEveryone>
        </>
    );
};

export default Home;