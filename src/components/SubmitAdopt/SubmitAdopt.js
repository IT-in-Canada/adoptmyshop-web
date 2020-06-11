import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Title from '../Form/Title';
import './SubmitAdopt.scss';

export default function SubmitAdopt() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="submit-confirmation-adopt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 adopt-background">
                            <Title title="Adopt my Shop" />
                        </div>
                        <div className="col-md-6 adopt-content">
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