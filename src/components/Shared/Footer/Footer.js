import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from '../../icons_&_images/facebook.png';
import twitter from '../../icons_&_images/twitter.png';
import whatsapp from '../../icons_&_images/whatsapp.png';


const Footer = () => {
    return (
        <div className="container">
            <div id="about" className="row pt-5 pb-5">
                <div className="col-md-2">
                    <ul style={{ listStyle: "none" }}>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">ISchool for recruiting</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Teach on ischool</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Get the app</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">About us</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Contact us</Link></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul style={{ listStyle: "none" }}>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Careers</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Blog</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Help and Support</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">About us</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Affiliate</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul style={{ listStyle: "none" }}>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Terms</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Privacy policy and cookie policy</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Sitemap</Link></li>
                        <li><Link className="text-body footer-link link-unstyle text-decoration-none" to="/">Featured courses</Link></li>
                    </ul>
                </div>
                <div className="col-md-5">
                    <div className="d-flex justify-content-end">
                        <h2 className="text-right">One's<br />Employment, Our<br />Fame</h2>
                    </div>
                    <div className="d-flex justify-content-end">
                        <a target="_blank" href="/facebook.com"><img height="45px" width="45px" src={facebook} alt="" /></a>
                        <a target="_blank" href="/twitter.com"><img height="45px" width="45px" src={twitter} alt="" /></a>
                        <a target="_blank" href="/whatsapp.com"><img height="45px" width="45px" src={whatsapp} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;