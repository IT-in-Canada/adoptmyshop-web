import React from 'react';
import './Navbar.scss'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="#"
            ><img src="./assets/logo-header.svg" alt=" Logo Header"
                /></a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nominate a Shop </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">I am a Business</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}