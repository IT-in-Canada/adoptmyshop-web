import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 first">
                        <div className="row">
                            <div className="col-sm-4 col-lg-2">
                                <Link to="/" className="logo-footer">
                                    <img src="./assets/logo-footer.svg" alt="Logo Footer" title="Go to the Homepage"/>
                                </Link>
                            </div>
                            <div className="col-sm-8 col-lg-10">
                                <h5>We're in this together!</h5>
                                <p>Support your local business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 second">
                        <h5>Who we are</h5>
                        <p>
                            A community initiative by
                            <a
                                href="https://dailyhive.com/"
                                target="_blank"
                                rel="noopener noreferrer"> Daily Hive
                            </a> and
                            <a
                                href="https://westcoastfoundation.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            > West Coast Foundation
                            </a>.
                            Small Business Profiles provided by Daily Hive, website created & maintained by West Coast Foundation and
                            <a href="" target="_blank" rel="noopener noreferrer"
                            > IT in Canada
                            </a> supported by students of
                            <a
                                href="https://www.comit.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            > Recode Your Future program
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}