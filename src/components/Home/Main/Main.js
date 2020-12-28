import React from 'react';
import CountUp from 'react-countup';
import './Main.css';

const Main = () => {
    return (
        <div className="container service">
            <h1 className="text-center text-uppercase mb-5 pb-5">Why Choose us</h1>
            <div className="styled-div"></div>
            <div className="d-flex justify-content-around">
                <div className="text-center">
                    <h1 style={{ fontWeight: "700", fontSize: "55px" }} className="text-muted">
                        <CountUp end={1058} duration={5} />+
                    </h1>
                    <p className="text-uppercase">Learners</p>
                </div>
                <div className="text-center">
                    <h1 style={{ fontWeight: "700", fontSize: "55px" }} className="text-muted">
                        <CountUp end={50} duration={8} />+
                    </h1>
                    <p className="text-uppercase">Courses</p>
                </div>
                <div className="text-center">
                    <h1 style={{ fontWeight: "700", fontSize: "55px" }} className="text-muted">
                        <CountUp end={13} duration={12} />+
                    </h1>
                    <p className="text-uppercase">Projects</p>
                </div>
            </div>
        </div>
    );
};

export default Main;