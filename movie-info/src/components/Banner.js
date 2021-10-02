import React, { useState, useEffect } from 'react';
import './Banner.css';
import { _axios } from '../Axios';
import { requests } from '../request';
import {  Link } from 'react-router-dom';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

function Banner() {

    const [ movie, setMoive ] = useState([]);

    useEffect(() => {
        async function random_movie() {
            const get_movies = await _axios.get(requests.upcoming);
            const get_randome_movie =  await get_movies.data.results[Math.floor(Math.random() *  (get_movies.data.results.length - 1))]
            setMoive(get_randome_movie);
            return get_randome_movie;
        }
        
        random_movie();

        return () => {
            setMoive([]);
        }
    }, []);


    function subStr(str, len) {
        return str?.length > len ? str?.substr(0, len)+'...': str;
    }

    // console.log(movie);

    return (
        <>
        <div className="banner" style={{backgroundImage: `url(${IMG_URL + movie.backdrop_path})`}}>
            <div className="banner__wrap" >
                <h1 className="banner__title">{movie.title}</h1>
                <p className="banner__para" >{subStr(movie.overview, 150)}</p>
                <Link className="banner__button" to={`/detail/${movie.id}`}>
                    Info
                </Link>
            </div>
        </div>
        <div className="gradient" />
        </>
    )
}

export default Banner
