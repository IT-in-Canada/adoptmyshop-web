import React from 'react';
import './Search.scss';
import { FaSearch } from 'react-icons/fa';

export default function Search(props) {
    const { renderStyle } = props;

    return (
        <section className={"search " + renderStyle}>
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-10">
                        {(renderStyle === "full") && (
                            <div className="content">
                                <h1>Support Local Business</h1>
                                <p>
                                    Help support your local community survive the COVID-19 closures.
                                    Buy gift cards, shop online, and spread the word so that your
                                    favourite shops will be around for years to come.
                            </p>
                            </div>
                        )}
                        <form className="pt-2 pb-2">
                            <div className="row">
                                <div className="col-lg-4">
                                    <input
                                        type="text"
                                        className="form-control search-control mb-3"
                                        placeholder="Search for Business"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="text"
                                        className="form-control search-control mb-3"
                                        placeholder="Where"
                                    />
                                </div>
                                <div className="col-md-3 col-lg-2">
                                    <button type="button" className="btn search-control">
                                        <FaSearch /><span> Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}