import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './BusinessAction.scss';
import { Link } from 'react-router-dom';

export default function BusinessAction() {
    return (
        <section className="business-action">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 action-item">
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <img
                                    className="img-fluid"
                                    src="./assets/are-you-business.svg"
                                    alt="Business Action 1"
                                />
                            </div>
                            <div className="col-sm-9 col-md-9 col-lg-9 action-content">
                                <h5>Are you a Business?</h5>
                                <p>
                                    <span>Share your story with us.</span> Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam.
                </p>
                                <Link to="/adopt-my-shop" title="Go to Adopt my Shop">
                                    <button className="btn">
                                        Learn More &nbsp;<span
                                        ><FaLongArrowAltRight /></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 action-item">
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <img
                                    className="img-fluid"
                                    src="./assets/nominate-shop.svg"
                                    alt="Business Action 2"
                                />
                            </div>
                            <div className="col-sm-9 col-md-9 col-lg-9 action-content">
                                <h5>Nominate a Shop</h5>
                                <p>
                                    <span>You can help your favourite restaurant.</span> Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  lorem ipsum dolor.
                </p>
                                <Link to="/nominate-a-shop" title="Go to Nominate a Shop">
                                    <button className="btn">
                                        Learn More &nbsp;<span
                                        ><FaLongArrowAltRight /></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}