import React, { useEffect, useState } from 'react'
import { useParams, Link  } from 'react-router-dom';
import { _axios } from '../Axios';
import { requests } from '../request';
import './SearchMovies.css';


const IMG_URL = 'https://image.tmdb.org/t/p/original';

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
            <div className="lists">
            {
                data.map(list => {
                    return  <Link to={"/detail/"+list.id}>
                                    <img className="item__poster" src={IMG_URL+list.poster_path} alt={list.title} />
                                    <p style={{color: 'white'}}>{list.title}</p>
                            </Link>
                })
            }
            </div>
        </div>
    )
}

export default SearchMovies
