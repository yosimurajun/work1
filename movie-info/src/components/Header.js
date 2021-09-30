import React, { useState, useEffect } from 'react';
import './Header.css';
import Nav from './Nav';

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
            <div className="header__logo">
                The Movie
            </div>
            <Nav />
        </div>
    )
}

export default Header
