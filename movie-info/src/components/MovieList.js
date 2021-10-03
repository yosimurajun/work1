import React from 'react';
import { Link } from 'react-router-dom';


const IMG_URL = 'https://image.tmdb.org/t/p/original';

function MovieList({ data }) {


    


    return (
        <div className="lists">
        {
            data.map(list => {
                return  <Link className="list__Link" to={"/detail/"+list.id}>
                                <img className="item__poster" src={IMG_URL+list.poster_path} alt={list.title} />
                                <p>{list.title}</p>
                        </Link>
            })
        }
        </div>
    )
}

export default MovieList
