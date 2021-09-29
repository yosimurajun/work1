import React from 'react';
import './Header.css';
import Nav from './Nav';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                The Movie
            </div>
            <Nav />
        </div>
    )
}

export default Header
