import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './SubmitNominate.scss';

export default function SubmitNominate() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="submit-confirmation-nominate">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <h3>Thank you! Your shop information has been submited.</h3>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>

    )
}