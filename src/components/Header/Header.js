import React from 'react';
import './Header.scss';
import Navbar from '../Navbar';
import Search from '../Search';

export default function Header() {
    return (
        <header>
            <Navbar />
            <Search />
        </header>
    );
}