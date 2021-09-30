import React from 'react';
import './Nav.css';
import {  Link } from 'react-router-dom';





function Nav() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <a href="#" >About</a>
            <a href="#" >List</a>
        </div>
    )
}

export default Nav
