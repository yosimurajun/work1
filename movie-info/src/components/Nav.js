import React from 'react';
import './Nav.css';
import {  Link } from 'react-router-dom';





function Nav() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
        </div>
    )
}

export default Nav
