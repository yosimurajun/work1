import React, { useState, useEffect } from 'react';
import './Header.css';
import SearchInput from './SearchInput';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Header() {

    const [ active, setActive ] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setActive(true);
            } else {
                setActive(false);
            }

            // return () => {
            //     window.removeEventListener('scroll', () => {
                    

            //     });
                
            // }
        })

    }, [])
    


    return (
        <div className={ active ? "header active" : "header"}>
            <Link className="header__logo" to="/">
                The Movie
            </Link>
            <SearchInput />
            <Nav />
        </div>
    )
}

export default Header
