import React from 'react';
import './Navbar.scss';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar container navbar-expand-md navbar-ams">
            <Link to="/" className="navbar-brand" title="Go to the Homepage">
                <img src="./assets/logo-header.svg" alt=" Logo Header" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <FaBars />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nominate a Shop </a>
                    </li>
                    <Link to="/adopt-my-shop" className="nav-link" title="Go to Adopt my Shop">
                        <li className="nav-item">
                            I am a Business
                        </li>
                    </Link>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}