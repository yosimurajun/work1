import React, { useState, useEffect } from 'react';
import './Banner.css';
import { _axios } from '../Axios';
import { requests } from '../request';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

function Banner() {

    const [ movie, setMoive ] = useState([]);

    useEffect(() => {
        async function random_movie() {
            const get_movies = await _axios.get(requests.upcoming);
            const get_randome_movie =  get_movies.data.results[Math.floor(Math.random() *  (get_movies.data.results.length - 1))]
            setMoive(get_randome_movie);
        }
        
        random_movie();
    }, []);

    console.log(movie);

    return (
        <div className="banner" style={{backgroundImage: `url(${IMG_URL + movie.backdrop_path})`}}>
            <div className="banner__wrap" >
                <h1 className="banner__title">{movie.title}</h1>
            </div>
            <p className="banner__para" >{movie.overview}</p>
        </div>
    )
}

export default Banner
