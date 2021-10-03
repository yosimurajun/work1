import React, { useEffect, useState } from 'react'
import { useParams, Link  } from 'react-router-dom';
import { _axios } from '../Axios';
import { requests } from '../request';
import './SearchMovies.css';
import MovieList from './MovieList';




function SearchMovies() {

    const { query } = useParams();

    const [ data, setData ] = useState([]);


    useEffect(() => {
            const reponseData = async () => {
                const response =  await _axios.get(`https://api.themoviedb.org/3/search/movie${requests.getSearch}${query}`);
                setData(response.data.results);
                
            }
            reponseData();

        }, [query]);


        return (
        <div className="search">
            <h1 className="search__title">Search : {query}</h1>
            <MovieList data={data} />
        </div>
    )
}

export default SearchMovies
