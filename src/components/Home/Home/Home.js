import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Topbar from '../../Shared/Topbar/Topbar';
import About from '../About/About';
import './Home.css';
import messenger from '../../icons_&_images/messenger.png';
import Main from '../Main/Main';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../../Shared/Footer/Footer';
import { IconButton } from '@material-ui/core';

const Home = () => {
    return (
        <div>
            <Topbar />

            <div className="header">
                <Header />
            </div>

            <div className="d-flex pt-4 pb-5">
                <About />
                <div className="d-flex justify-content-end mt-auto">
                    <a href="https://www.facebook.com/pioneer.alpha.ltd/">
                        <IconButton>
                            <img height="63px" width="63px" src={messenger} alt="" />
                        </IconButton>
                    </a>
                </div>
            </div>

            <div className="pt-5 pb-5">
                <Main />
            </div>

            <div style={{ backgroundColor: "#EEEEEE", }}>
                <Features />
            </div>

            <NewsLetter />

            <div style={{ backgroundColor: "#EBEBEB" }}>
                <Footer />
                <div className="bg-dark text-center pt-1 pb-4">
                    <a className="text-light link-unstyle text-decoration-none" href="https://www.amariSchool.com">www.amariSchool.com</a>
                </div>
            </div>
        </div>
    );
};

export default Home;