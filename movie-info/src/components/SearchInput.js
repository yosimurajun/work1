import React, { useState, useRef }  from 'react'
import { requests } from '../request';
import { Link, useHistory } from 'react-router-dom';

function SearchInput() {

    
    // const [ query, setQuery ] = useState();

    const history = useHistory();
    const inputEl  = useRef();

    const onButtonClick = () => {
        history.push("/search/"+inputEl.current.value);

    }

    

    return (
        <div className="search__input">
                <input ref={inputEl} type="text" />
                <button onClick={onButtonClick}>search</button>
        </div>
    )
}

export default SearchInput
