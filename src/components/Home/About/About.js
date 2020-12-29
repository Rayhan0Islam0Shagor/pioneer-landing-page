import React from 'react';
import { IconButton } from '@material-ui/core';
import messenger from '../../icons_&_images/messenger.png';

const About = () => {
    return (
        <div className="d-flex pt-4 pb-5">
            <div className="container">
                <h1 className="font-weight-bold">About Amar iSchool</h1>
                <p className="text-muted">Amar iSchool is an initiative of PA family. Since September 2016, Amar iSchool family has been providing online education services to Japanese High School Students. Currently, more than 130 tutors from Amar iSchool are serving above 30,000 Japanese students from 230 high schools.
            </p>
                <p className="text-muted">
                    It is one of the largest online educational platforms covering all aspects of education starting from the lower secondary to the tertiary level of education. Amar iSchool is one of the biggest online educational platforms in Bangladesh. With the vision of digitalizing the e-learning platform of Bangladesh, the app is bringing digital educational materials at student's fingertips.
            </p>
            </div>
            <div className="d-flex justify-content-end mt-auto">
                <a href="https://www.facebook.com/pioneer.alpha.ltd/">
                    <IconButton>
                        <img height="63px" width="63px" src={messenger} alt="" />
                    </IconButton>
                </a>
            </div>
        </div>
    );
};

export default About;