import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Title from '../Form/Title';
import SideContent from '../Form/SideContent';
import Input from '../Form/Input';
import Label from '../Form/Label';
import Textarea from '../Form/Textarea';
import Upload from '../Form/Upload';
import SocialMediaTitle from '../Form/SocialMediaTitle';
import facebookIcon from './images/facebook.svg';
import './AdoptMyShop.scss';

export default function AdoptMyShop() {
    return (
        <Fragment>
            <Header renderStyle="slim" />
            <section className="form-page">
                <div className="container">
                    <Title title="Adopt my Shop" />
                    <section className="row">
                        <div className="col-md-3 side-content">
                            <SideContent
                                title="Personal Information"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam condimentum, mattis erat eu, lobortis elit."
                            />
                        </div>
                        <div className="offset-md-1 col-md-8">
                            <div className="input-block">
                                <Input type="text" name="full-name" placeholder="Full Name" required />
                                <Label htmlFor="full-name" text="Enter your Full Name" required />
                            </div>
                            <div className="input-block">
                                <Input type="email" name="email" placeholder="Email" required />
                                <Label htmlFor="email" text="Enter your Email" />
                            </div>
                            <div className="input-block">
                                <Input type="phone" name="personal-phone" placeholder="Phone" required />
                                <Label htmlFor="personal-phone" text="Enter your Phone Number" />
                            </div>
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
                            <div className="input-block">
                                <Input type="text" name="business-name" placeholder="Business Name" required />
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
                            <div className="input-block">
                                <Input type="text" name="main-address" placeholder="Main Address" required />
                                <Label htmlFor="" text="Enter your Business Address" />
                            </div>
                            <div className="input-block">
                                <Input type="phone" name="business-phone" placeholder="Phone" required />
                                <Label htmlFor="business-phone" text="Enter your Business Phone Number" />
                            </div>
                            <div className="input-block">
                                <Input type="text" name="business-website" placeholder="URL (optional)" />
                                <Label htmlFor="business-website" text="Enter your Business Website" />
                            </div>
                            <div className="input-block">
                                <Textarea id="business-description" rows="5" cols="10" maxLength='250'
                                    placeholder="Describe your Business" required />
                                <Label htmlFor="business-description" text="Business Description" />
                            </div>
                            <div className="input-block">
                                <Textarea id="products-description" rows="5" cols="10" maxLength='250'
                                    placeholder="Which products are you currently offering for takeout/delivery?" required />
                                <Label htmlFor="products-description" text="Products Description" />
                            </div>
                            <div className="input-block">
                                <Upload title="Upload Image" />
                            </div>
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
                            <SocialMediaTitle icon={facebookIcon} alt="Facebook Icon"
                            title="Facebook" />
                            <Input type="text" name="facebook-account" placeholder="https://www.facebook.com/yourstore/" />
                            <Label htmlFor="facebook-account" text="Enter your Facebook account link" />
                        </div>

                    </section>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}