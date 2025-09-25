import React from 'react';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Services from '../component/Services';
import BuildForEveryone from '../component/BuildForEveryone';
import Question from '../component/Question';
import Footer from '../component/Footer';
import Testimonials from '../component/Testimonials';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <BuildForEveryone></BuildForEveryone>
            <Testimonials></Testimonials>
            <Question></Question>
            <Footer></Footer>
        </>
    );
};

export default Home;