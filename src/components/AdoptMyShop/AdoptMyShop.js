import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Title from '../Form/Title/Title'

export default function AdoptMyShop() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="form-page">
                <div className="container">
                    <Title title="Adopt my Shop" />
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}