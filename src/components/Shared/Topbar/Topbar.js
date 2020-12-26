import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../icons_&_images/AiS-Logo--Right-Side-(Solid-Ash).png';
import searchIcon from '../../icons_&_images/Layer 4.png';
import cartIcon from '../../icons_&_images/Layer 5.png';
import optionIcon from '../../icons_&_images/Ellipse 1.png';
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="fixed-top bg-light">
            <div className=" container">
                <nav className="navbar  navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img height="50px" src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink activeClassName="active" className="nav-link" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/course">COURSES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                        <div className="row ml-5">
                            <div className="col">
                                <Link to="/search">
                                    <img height="42px" width="47px" src={searchIcon} alt="" />
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/cart">
                                    <img height="35px" width="40px" src={cartIcon} alt="" />
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/more">
                                    <img height="35px" width="40px" src={optionIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Topbar;