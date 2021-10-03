import React, { useState ,useEffect } from 'react'
import './Row.css';
import { _axios } from '../Axios';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';


const IMG_URL = 'https://image.tmdb.org/t/p/original';
// const YOUTUBE_URL = 'https://www.youtube.com/watch?v=';

const opts = {
    height: '250',
    width: '360',
    playerVars: {
        autoplay: -1,
      },
}

const _onReady = (event) => {
    event.target.pauseVideo();
}


const items = (title, movie) =>  {
    
    if(title === 'Actors') {
        return (
            <>
                <img  key={movie?.cast_id} className={'row__poster actor'} src={IMG_URL + movie?.profile_path} alt={ movie?.cast_id } />
                <h4>{movie?.name}</h4>
            </>
        )

    }  else if(title === 'Videos') {
        return (
            
                <YouTube videoId={movie.key} opts={opts}  onReady={_onReady} />
            
        )

    }  else if(title === 'Reviews') {
        return (
            <>
                <p>{movie}</p>
            </>
        )

    }
     else {
        return (
            <Link to={"/detail/"+movie.id}>
                <img  key={movie.id} className={"row__poster over"} src={IMG_URL + movie?.backdrop_path} alt={ movie.title || movie.original_title } />
                <h4>{movie?.title}</h4>
            </Link>
        )
    } 
    
}


function Row({ title, request}) {

    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        async function requestMovies()  {
            
            const getMovies = await _axios.get(request);
            // console.log(title, getMovies);
            if(title === 'Actors') {
                setMovies(getMovies.data?.cast.slice(0, 14));
            // } else if(title === 'Videos') {
            //     setMovies(getMovies.data?.results);
            // } else if(title === "Reviews") {
            //     console.log(getMovies.data?.results);
            //     // setMovies(getMovies.data?.results);
            }
            else {
                // console.log(getMovies.data?.results);
                setMovies(getMovies.data?.results);    
            }

            
        }
        requestMovies();
        
    }, [title, request]);
    
    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>
            <div className="wrap">
            {
                movies.map((movie, index) => {
                    return  <div className="wrap__movies">
                        { items(title, movie) }
                            </div>
                    }
                )
            }
            </div>
        </div>
    )
}

export default Row;