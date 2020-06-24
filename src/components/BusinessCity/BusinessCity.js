import React, { Fragment } from 'react';
import Header from '../Header';
import Title from '../Title';
import SearchItem from '../SearchItem';
import Footer from '../Footer';
import './BusinessCity.scss';

export default function BusinessCity() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="business-city">
                <div className="container">
                    <div className="col">
                        <Title title="City Name" />
                        <div className="row">
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                                <SearchItem href="#" imgPath="https://via.placeholder.com/243/F2F2F2/F2F2F2" alt="Business Image" text="Business Image" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}