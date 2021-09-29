import React, { useState ,useEffect } from 'react'
import './Row.css';
import { _axios } from '../Axios';


const IMG_URL = 'https://image.tmdb.org/t/p/original';

function Row({ title, request}) {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function requestMovies()  {
            const getMovies = await _axios.get(request);
            // console.log(title, getMovies.data.results);
            setMovies(getMovies.data.results);

        }
        requestMovies();
        
    }, []);

    const handleMouseDown = (e) => {
        
        console.log(e);

        

    }

    const handleMouseMove = (e) => {
        // console.log('mouse move');
        // console.log('mouse', e.screenX);
    }


    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>
            <div className="wrap" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} >
            {
                movies.map(movie => {
                    return  <img className="row__poster" src={IMG_URL + movie.backdrop_path} alt={ movie.title || movie.original_title } />
                    }
                )
            }
            </div>
        </div>
    )
}

export default Row;