import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Topbar from '../../Shared/Topbar/Topbar';
import About from '../About/About';
import './Home.css';
import Main from '../Main/Main';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <>
            <Topbar />
            <Header />
            <About />
            <Main />
            <Features />
            <NewsLetter />
            <Footer />
        </>
    );
};

export default Home;