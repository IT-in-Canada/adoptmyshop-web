import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Cities.scss';

export default function Cities(){
    return(
        <Fragment>
            <Header renderStyle="slim" />
            <section className="cities">
                <div className="container">
                    <div className="row breadcrumb-select">
                        <p>Home/Cities</p>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}