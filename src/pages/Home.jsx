import React from 'react';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Services from '../component/Services';
import BuildForEveryone from '../component/BuildForEveryone';
import Question from '../component/Question';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <BuildForEveryone></BuildForEveryone>
            <Question></Question>
        </>
    );
};

export default Home;