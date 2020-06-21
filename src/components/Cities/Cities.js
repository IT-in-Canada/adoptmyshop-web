import React, { Fragment } from 'react';
import Header from '../Header';
import Title from '../Title';
import SearchItem from '../SearchItem';
import Footer from '../Footer';
import './Cities.scss';

export default function Cities() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="cities">
                <div className="container">
                    <div className="col">
                        <Title title="Search by City" />
                        <div className="row">
                            <SearchItem href="#" imgPath="assets/vancouver.png" alt="Vancouver" text="Vancouver" />
                            <SearchItem href="#" imgPath="assets/toronto.png" alt="Toronto" text="Toronto" />
                            <SearchItem href="#" imgPath="assets/montreal.png" alt="Montreal" text="Montreal" />
                            <SearchItem href="#" imgPath="assets/calgary.png" alt="Calgary" text="Calgary" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}