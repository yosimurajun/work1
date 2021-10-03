import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import MovieList from './MovieList';
import { requests } from '../request';

function List() {

    const [genres, setGenres] = useState([]);
    const [action, setAction] = useState({id: 28, checked: false});
    const [drama, setDrama] = useState({id: 14, checked: false});
    const [science, setScience] = useState({id: 14, checked: false});
    const [ data, setData ] = useState([]);


    const onChecked = (e) => {
        if(e.target.value === '18') {
            const genre = genres.find((genre) =>  genre === e.target.value);

            if(action.checked) {
                setAction({...action, checked: !action.checked});
            } else {
                setAction({...action, checked: !action.checked});
            }

            if(genre) {
                const remove__genre = genres.filter(genre => genre !== e.target.value);
                setGenres(remove__genre);
            } else {
                setGenres((prev) => [...prev, e.target.value]);
            }
        } else if(e.target.value === '14') {
            const genre = genres.find((genre) =>  genre === e.target.value);

            if(drama.checked) {
                setDrama({...drama, checked: !drama.checked});
            } else {
                setDrama({...drama, checked: !drama.checked});
            }

            if(genre) {
                const remove__genre = genres.filter(genre => genre !== e.target.value);
                setGenres(remove__genre);
            } else {
                setGenres((prev) => [...prev, e.target.value]);
            }
            
        } else if(e.target.value === '21') {
            const genre = genres.find((genre) =>  genre === e.target.value);
            if(science.checked) {
                setScience({...science, checked: !science.checked});
            } else {
                setScience({...science, checked: !science.checked});
            }
            if(genre) {
                const remove__genre = genres.filter(genre => genre !== e.target.value);
                setGenres(remove__genre);
            } else {
                setGenres((prev) => [...prev, e.target.value]);
            }
        }
    }

    useEffect(() => {
        let genre_list
        if(genres.length > 0) {
            genre_list = genres.join("%2C");
        } else {
            genre_list = action.id;
        }

        const reponseData = async () => {
            const response =  await axios.get(requests.discover+genre_list);
            setData(response.data.results);
        }

        reponseData();
    }, [genres])


    return (
        <div className="list__movies">
            <div className="list__movies__sidebar">
                <div className="list__genre_wrap">
                    <label className="topping">
                        <input type="checkbox" id="topping" name="18" 
                        value="18" checked={action.checked} onChange={onChecked}/>
                        Action
                    </label>
                    <label className="topping">
                        <input type="checkbox" id="topping" name="14" 
                        value="14" checked={drama.checked} onChange={onChecked}/>
                        Drama
                    </label>
                    <label className="topping">
                        <input type="checkbox" id="topping" name="14" 
                        value="21" checked={science.checked} onChange={onChecked}/>
                        Sci-fi
                    </label>
                </div>
            </div>
            <div className="list__movies__content">
                <MovieList data={data}/>
            </div>
        </div>
    )
}

export default List
