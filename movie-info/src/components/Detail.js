import React, { useEffect, useState } from 'react';
import './Detail.css';
import { useParams, Link } from 'react-router-dom';
import { _axios } from '../Axios';
import { requests } from '../request';
import Row from './Row';


const IMG_URL = 'https://image.tmdb.org/t/p/original';

function Detail() {
    
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function getMovieDetail() {
            const movie_detail = await _axios.get(id+requests.getDetail);
            setMovie(movie_detail.data);
            setGenres(movie_detail.data?.genres);
            return movie_detail;
        }
        

        getMovieDetail();


    }, [id]);
    console.log(genres);

    return (
        <div className="detail" >
            <div className="detail__wrap" style={{ backgroundImage: `url(${IMG_URL}${movie?.backdrop_path})`}}>
                <div className="movie_details">
                    <img className="movie_poster" src={IMG_URL + movie?.poster_path} alt={movie?.title} />
                    <div className="movie_content">
                        <a className="home__page" href={movie?.homepage}>
                            <h1 className="detail__title">{movie?.title}</h1>
                        </a>
                        {
                            genres.map(g => {
                                if(g.name.toLowerCase() === 'action') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'adventure') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'animation') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'comedy') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'crime') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'documentary') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'drama') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'family') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'fantasy') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'horror') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'music') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'mystery') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'romance') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'science fiction') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'tv movie') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'thriller') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'war') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                } else if(g.name.toLowerCase() === 'western') {
                                    return <span className={'genre_tag '+g.name.toLowerCase() }>{g.name}</span>
                                }
                            })
                        }
                        <p className="detail__para" >{movie?.overview}</p>
                        <p className="release_date">release date: {movie?.release_date}</p>
                        <span className="runtime">run time: {movie?.runtime}m</span>
                    </div>
                </div>
            </div>
            
            <div className="gradient" />
            <Row title="Actors" request={movie.id + requests.getActors} />
            <Row title="Videos" request={movie.id + requests.getVideos} />
            {/* <Row title="Reviews" request={movie.id + requests.getReviews} /> */}
        </div>
    )
}

export default Detail;
