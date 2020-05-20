import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Title from '../Form/Title';
import SideContent from '../Form/SideContent';
import './AdoptMyShop.scss';

export default function AdoptMyShop() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="form-page">
                <div className="container">
                    <Title title="Adopt my Shop" />
                    <section className="row side-content">
                        <SideContent
                            title="Personal Information"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam condimentum, mattis erat eu, lobortis elit."
                        />
                    </section>
                    <section className="row side-content">
                        <SideContent
                            title="Business Information"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam condimentum, mattis erat eu, lobortis elit."
                        />
                    </section>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}