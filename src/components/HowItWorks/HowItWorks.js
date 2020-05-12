import React, { Fragment } from 'react';
import './HowItWorks.scss';

export default function HowItWorks() {
    return (
        <Fragment>
            <section className="how-it-works">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-10">
                            <h2>How it works</h2>
                            <div className="row">
                                <div className="col col-12 col-sm-4 col-md-4 col-lg">
                                    <img
                                        className="img-fluid"
                                        src="./assets/search-shop.svg"
                                        alt="Action 1"
                                    />
                                    <p>Find your favourite local business.</p>
                                </div>
                                <div className="col col-12 col-sm-4 col-md-4 col-lg">
                                    <img
                                        className="img-fluid"
                                        src="./assets/found-shop.svg"
                                        alt="Action 2"
                                    />
                                    <p>Found it! I wanna help! :)</p>
                                </div>
                                <div className="col col-12 col-sm-4 col-md-4 col-lg">
                                    <img
                                        className="img-fluid"
                                        src="./assets/buy-gift.svg"
                                        alt="Action 3"
                                    />
                                    <p>You can buy a gift card for the future.</p>
                                </div>
                                <div className="col col-12 col-sm-4 col-md-4 col-lg">
                                    <img
                                        className="img-fluid"
                                        src="./assets/order-online.svg"
                                        alt="Action 4"
                                    />
                                    <p>Or you can order online today.</p>
                                </div>
                                <div className="col col-12 col-sm-4 col-md-4 col-lg">
                                    <img
                                        className="img-fluid"
                                        src="./assets/thank-you.svg"
                                        alt="Action 5"
                                    />
                                    <p>
                                        THANK YOU! With your help our local business will survive!
                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="how-it-works-mobile">
                <div className="container">
                    <div className="row actions">
                        <div className="col-10 offset-1 col-sm-8 offset-sm-2">
                            <div
                                id="actionsCarousel"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <h4>How it works</h4>
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#actionsCarousel"
                                        data-slide-to="0"
                                        className="active"
                                    ></li>
                                    <li data-target="#actionsCarousel" data-slide-to="1"></li>
                                    <li data-target="#actionsCarousel" data-slide-to="2"></li>
                                </ol>
                                {/* Carousel items */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-6">
                                                <img
                                                    className="img-fluid"
                                                    src="./assets/search-shop.svg"
                                                    alt="Action 1"
                                                />
                                                <p>Find your favourite local business.</p>
                                            </div>
                                            <div className="col-6">
                                                <img
                                                    className="img-fluid"
                                                    src="./assets/found-shop.svg"
                                                    alt="Action 2"
                                                />
                                                <p>Found it! I wanna help :)</p>
                                            </div>
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* item */}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-6">
                                                <img
                                                    className="img-fluid"
                                                    src="./assets/buy-gift.svg"
                                                    alt="Action 3"
                                                />
                                                <p>
                                                    You can buy a gift card for the future.
                      </p>
                                            </div>
                                            <div className="col-6">
                                                <img
                                                    className="img-fluid"
                                                    src="./assets/order-online.svg"
                                                    alt="Action 4"
                                                />
                                                <p>Or you can order online today!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                    {/* item */}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-6">
                                                <img
                                                    className="img-fluid"
                                                    src="./assets/thank-you.svg"
                                                    alt="Action 5"
                                                />
                                                <p>
                                                    THANK YOU! With your help our local business will
                                                    survive!
                      </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                </div>
                                {/* carousel-inner */}
                            </div>
                            {/* Carousel */}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}