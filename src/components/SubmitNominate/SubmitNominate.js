import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Title from '../Title';
import './SubmitNominate.scss';

export default function SubmitNominate() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="submit-confirmation-nominate">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 nominate-background">
                            <Title title="Nominate a Shop" />
                        </div>
                        <div className="col-md-6 nominate-content">
                            <h2>That's Awesome!</h2>
                            <p><strong>Your information was successfully submitted!</strong></p>
                            <p>Our volunteer team will get in contact with you soon!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>

    )
}