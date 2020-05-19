import React from 'react';
import './Header.scss';
import Navbar from '../Navbar';
import Search from '../Search';

export default function Header(props) {
    const renderStyle = props.renderStyle || "full";
    return (
        <header className={renderStyle}>
            <Navbar />
            <Search renderStyle={renderStyle} />
        </header>
    );
}