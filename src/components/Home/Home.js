import React from 'react';
import { Fragment } from 'react';
import Header from './../Header';
import HowItWorks from './../HowItWorks';
import SearchCity from './../SearchCity';
import BusinessAction from './../BusinessAction';
import Footer from './../Footer';

export default function Home() {
    return (
        <Fragment>
            <Header />
            <HowItWorks />
            <SearchCity />
            <BusinessAction />
            <Footer />
        </Fragment>
    );
}