import React from 'react';

const NewsLetter = () => {
    return (
        <div className="container" style={{ height: "400px", padding: "50px 0px" }}>
            <div className="row subscribe-sec d-flex align-items-center h-100">
                <div className="col-md-6 col-sm-12">
                    <h1>Subscribe for newsletter</h1>
                    <p>Subscribe to our newsletter and we will
                    <br />bring you the latest news.
                </p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex justify-content-between formData">
                        <input
                            placeholder="Enter your mail address"
                            className="form-control py-4"
                            type="email"

                        />
                        <button className="btn btn-secondary text-uppercase text-light">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;