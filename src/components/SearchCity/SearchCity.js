import React, { Fragment } from 'react';
import './SearchCity.scss';

export default function SearchCity() {
    return (
        <Fragment>
            <section className="search-city">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Search by City</h2>
                            <div className="row">
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="assets/vancouver.png"
                                            alt="Vancouver"
                                        />
                                        Vancouver
                                    </a>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="assets/toronto.png"
                                            alt="Toronto"
                                        />
                                        Toronto
                                    </a>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="assets/montreal.png"
                                            alt="Montreal"
                                        />
                                        Montreal
                                    </a>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="assets/calgary.png"
                                            alt="Calgary"
                                        />
                                        Calgary
                                    </a>
                                </div>
                            </div>
                            <div className="load-more">
                                <p>Load More <span>+</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="search-city-mobile">
                <div className="container">
                    <div className="row cities">
                        <div className="col-12">
                            <h4>Search by City</h4>
                            <div
                                id="citiesCarousel"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#citiesCarousel"
                                        data-slide-to="0"
                                        className="active"
                                    ></li>
                                    <li data-target="#citiesCarousel" data-slide-to="1"></li>
                                </ol>
                                {/* Carousel items */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-6">
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="./assets/vancouver.png"
                                                        alt="Vancouver"
                                                    />
                                                    <p>Vancouver</p>
                                                </a>
                                            </div>
                                            <div className="col-6 half-size">
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="./assets/toronto.png"
                                                        alt="Toronto"
                                                    />
                                                    <p>Toronto</p>
                                                </a>
                                            </div>
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* item */}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-6">
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="./assets/montreal.png"
                                                        alt="Montreal"
                                                    />
                                                    <p>Montreal</p>
                                                </a>
                                            </div>
                                            <div className="col-6 half-size">
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="./assets/calgary.png"
                                                        alt="Calgary"
                                                    />
                                                    <p>Calgary</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#citiesCarousel"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#citiesCarousel"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                {/* carousel-inner */}
                            </div>
                            {/* Carousel */}
                            <div className="load-more">
                                <p>Load More <span>+</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}