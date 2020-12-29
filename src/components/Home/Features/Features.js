import React from 'react';
import logoOne from '../../icons_&_images/Group 39.png';
import logoTwo from '../../icons_&_images/Group 44.png';
import logoThree from '../../icons_&_images/television.png';
import './Features.css';

const Features = () => {
    return (
        <section style={{ backgroundColor: "#EEEEEE", }}>
            <div className="container" style={{ padding: "50px 0px" }}>
                <h1 className="text-center text-uppercase mb-5 pb-5">Our exclusive features</h1>
                <div className="row ml-3">
                    <div className="d-flex justify-content-between">
                        <div className="col-md-3" style={{ width: "350px" }}>
                            <div className="card style-card">
                                <div style={{
                                    width: "120px",
                                    position: "absolute",
                                    top: "-60px",
                                    left: "25%",
                                    padding: "20px",
                                    backgroundColor: "white",
                                    height: "120px",
                                    borderRadius: "50%",
                                    overFlow: "hidden",
                                    border: "1px solid gray"
                                }}>
                                    <img height="70%"
                                        width="100%"
                                        src={logoOne}
                                        lassName="card-img-top mt-2" alt="..."
                                    />
                                </div>
                                <div className="card-body"
                                    style={{ marginTop: "100px" }}>
                                    <p className="card-text text-center text-uppercase">
                                        Full lifetime <br /> access
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ width: "350px" }}>
                            <div className="card style-card">
                                <div className="brand-card">
                                    <img height="80px"
                                        src={logoTwo}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                </div>
                                <div className="card-body"
                                    style={{ marginTop: "100px" }}>
                                    <p className="card-text text-center text-uppercase">
                                        Certificate of <br /> completion
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ width: "350px" }}>
                            <div className="card style-card">
                                <div className="brand-card">
                                    <img height="100%"
                                        width="100%"
                                        src={logoThree}
                                        className="card-img-top" alt="..."
                                    />
                                </div>
                                <div className="card-body"
                                    style={{ marginTop: "100px" }}>
                                    <p className="card-text text-center text-uppercase">
                                        Access on <br /> mobile and TV
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Features;