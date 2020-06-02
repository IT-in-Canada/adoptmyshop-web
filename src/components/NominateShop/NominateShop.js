import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Title from '../Form/Title';
import SideContent from '../Form/SideContent';
import InputFull from '../Form/InputFull/';
import Textarea from '../Form/Textarea';
import Upload from '../Form/Upload';
import Consentiment from '../Form/Consentiment';
import SocialMedia from '../Form/SocialMedia';
import facebookIcon from './images/facebook.svg';
import instagramIcon from './images/instagram.svg';
import twitterIcon from './images/twitter.svg';
import linkedinIcon from './images/linkedin.svg';
import { Link } from 'react-router-dom';
import './NominateShop.scss';

export default function NominateShop() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="form-page">
                <div className="container">
                    <Title title="Nominate a Shop" />
                    <section className="row">
                        <div className="col-md-3 side-content">
                            <SideContent
                                title="Personal Information"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam condimentum, mattis erat eu, lobortis elit."
                            />
                        </div>
                        <div className="offset-md-1 col-md-8">
                            <InputFull
                                text="Enter your name"
                                name="full-name"
                                placeholder="Full Name"
                                htmlFor="full-name"
                            />
                            <InputFull
                                type="tel"
                                text="Enter your phone number"
                                name="phone"
                                placeholder="Phone Number"
                                htmlFor="phone"
                            />
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-md-3 side-content">
                            <SideContent
                                title="Business Information"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam condimentum, mattis erat eu, lobortis elit."
                            />
                        </div>
                        <div className="offset-md-1 col-md-8">
                            <InputFull
                                name="business-name"
                                placeholder="Business Name"
                                text="Enter your Business Name"
                                htmlFor="business-name"
                            />
                            <div className="input-block">
                                <select name="market" id="market-select" className="full-select">
                                    <option value="">Market</option>
                                    <option value="food">Food</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="education">Education</option>
                                    <option value="decoration">Decoration</option>
                                    <option value="technology">Technology</option>
                                </select>
                                <label htmlFor="market-select">Select your business market</label>
                            </div>
                            <InputFull
                                name="main-address"
                                placeholder="Main Address"
                                text="Enter your Business Address"
                                htmlFor="main-address"
                            />
                            <Textarea
                                id="business-description"
                                rows="5"
                                cols="10"
                                maxLength='250'
                                placeholder="Describe your Business"
                                text="Enter your Business Description"
                                htmlFor="business-description"
                            />
                            <Textarea
                                id="products-description"
                                rows="5"
                                cols="10"
                                maxLength='250'
                                placeholder="Which products are you currently offering for takeout/delivery?"
                                text="Enter your Business Description"
                                hrmlFor="products-description"
                            />
                            <Upload title="Upload Image" />
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-md-3 side-content">
                            <SideContent
                                title="Social Media Accounts"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam condimentum, mattis erat eu, lobortis elit."
                            />
                        </div>
                        <div className="offset-md-1 col-md-8">
                            < SocialMedia
                                icon={facebookIcon}
                                alt="Facebook Icon"
                                title="Facebook"
                                name="facebook-account"
                                htmlFor="facebook-account"
                                placeholder="https://www.facebook.com/yourstore/"
                                text="Enter your Facebook account link"
                            />
                            < SocialMedia
                                icon={instagramIcon}
                                alt="Instagram Icon"
                                title="Instagram"
                                name="instagram-account"
                                htmlFor="instagram-account"
                                placeholder="https://www.instagram.com/yourstore/"
                                text="Enter your Instagram account link"
                            />
                            < SocialMedia
                                icon={twitterIcon}
                                alt="Twitter Icon"
                                title="Twitter"
                                name="twitter-account"
                                htmlFor="twitter-account"
                                placeholder="https://www.twitter.com/yourstore/"
                                text="Enter your Twitter account link"
                            />
                            < SocialMedia
                                icon={linkedinIcon}
                                alt="LinkedIn Icon"
                                title="LinkedIn"
                                name="linkedin-account"
                                htmlFor="linkedin-account"
                                placeholder="https://www.linkedin.com/yourstore/"
                                text="Enter your LinkedIn account link"
                            />
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-md-3 side-content">
                            <SideContent
                                title="Personal Authorization"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                        </div>
                        <div className="offset-md-1 col-md-8">
                            <div className="row">
                                <div className="col-md-2">
                                    <label className="checkbox-label">
                                        <input type="checkbox" id="adopt-my-shop-consentiment" defaultChecked />
                                        <span className="checkbox-custom"></span>
                                    </label>
                                </div>
                                <div className="col-md-10">
                                    <Consentiment />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="row">
                        <div className="offset-md-7 col-md-5">
                            <div className="row">
                                <div className="col-xs-2">
                                    <button className="btn cancel">Cancel</button>

                                </div>
                                <Link to="/nominate-a-shop-submission-confirmation" title="Submission Confirmation Page">
                                    <div className="offset-xs-1 col-xs-2">
                                        <button className="btn send">Send</button>

                                    </div>
                                </Link>

                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}