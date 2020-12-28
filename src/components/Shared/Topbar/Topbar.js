import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../icons_&_images/AiS-Logo--Right-Side-(Solid-Ash).png';
import './Topbar.css';
import { IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
                            <li className="nav-item">
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
                                    <IconButton>
                                        <SearchIcon style={{ color: "#363636" }} />
                                    </IconButton>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/cart">
                                    <IconButton>
                                        <AddShoppingCartIcon style={{ color: "#363636" }} />
                                    </IconButton>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/more">
                                    <IconButton>
                                        <AppsIcon style={{ color: "#363636" }} />
                                    </IconButton>
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