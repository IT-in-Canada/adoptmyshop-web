import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Title from '../Form/Title';
import SideContent from '../Form/SideContent';
import Input from '../Form/Input';
import Label from '../Form/Label';
import './AdoptMyShop.scss';

export default function AdoptMyShop() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="form-page">
                <div className="container">
                    <Title title="Adopt my Shop" />
                    <section className="row side-content">
                        <div className="col-md-3">
                            <SideContent
                                title="Personal Information"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam condimentum, mattis erat eu, lobortis elit."
                            />
                        </div>
                        <div className="offset-md-1 col-md-8">
                            <div className="input-block">
                                <Input type="text" name="full-name" placeholder="Full Name" />
                                <Label htmlFor="full-name" text="Enter your Full Name" />
                            </div>
                            <div className="input-block">
                                <Input type="email" name="email" placeholder="Email" />
                                <Label htmlFor="email" text="Enter your Email" />
                            </div>
                            <div className="input-block">
                                <Input type="phone" name="phone" placeholder="Phone" />
                                <Label htmlFor="phone" text="Enter your Phone Number" />
                            </div>
                        </div>
                    </section>
                    <section className="row side-content">
                        <div className="col-md-3">
                            <SideContent
                                title="Business Information"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam condimentum, mattis erat eu, lobortis elit."
                            />
                        </div>
                        <div className="offset-md-1 col-md-8">
                            <div className="input-block">
                                <Input type="text" name="business-name" placeholder="Business Name" />
                                <Label htmlFor="business-name" text="Enter your Business Name" />
                            </div>
                            <div className="input-block">
                                <select name="market" id="market-select" className="full-select">
                                    <option value="">Market</option>
                                    <option value="food">Food</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="education">Education</option>
                                    <option value="decoration">Decoration</option>
                                    <option value="technology">Technology</option>
                                </select>
                                <Label htmlFor="market-select" text="Select your Market" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}