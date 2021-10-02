import React, { useState, useRef }  from 'react'
import { requests } from '../request';
import { Link, useHistory } from 'react-router-dom';

function SearchInput() {

    


    const history = useHistory();
    const inputEl  = useRef();
    
    const onButtonClick = () => {
        
        history.push("/search/"+inputEl.current.value);
        inputEl.current.value = '';

    }

    

    return (
        <div className="search__wrap">
                <input className="search__input" ref={inputEl} type="text"/>
                <button className="search__button" onClick={onButtonClick}>search</button>
        </div>
    )
}

export default SearchInput
