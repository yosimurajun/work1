import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import MovieList from './MovieList';
import { requests } from '../request';

function List() {

    const [genres, setGenres] = useState([]);
    const [ data, setData ] = useState([]);

    const [allKindGenres, setAllKindGenres] = useState([
        {id: "28", name: 'Action', checked: false},
        {id: "12", name: 'Adventure',checked: false}, 
        {id: "16", name: 'Animation', checked: false}, 
        {id: "35", name: 'Comedy', checked: false}, 
        {id: "80", name: 'Crime', checked: false}, 
        {id: "99", name: 'Documentary', checked: false},
        {id: "18", name: 'Drama', checked: false},
        {id: "10751", name: 'Family', checked: false},
        {id: "14", name: 'Fantasy', checked: false},
        {id: "36", name: 'History', checked: false},
        {id: "27", name: 'Horror', checked: false},
        {id: "10402", name: 'Music', checked: false},
        {id: "9648", name: 'Mystery', checked: false},
        {id: "10749", name: 'Romance', checked: false},
        {id: "878", name: 'Science Fiction', checked: false},
        {id: "10770", name: 'TV Movie', checked: false},
        {id: "53", name: 'Thriller', checked: false},
        {id: "10752", name: 'War', checked: false},
        {id: "37", name: 'Western', checked: false},
    ])


    const onChecked = (index) => e => {
        
        

        allKindGenres.forEach(genre => {
            // console.log(e.target.value === genre.id);
            if(genre.id === e.target.value) {
                // console.log('checked');
                const _genre = genres.find((genre) =>  genre === e.target.value);
                
                let newArr = [...allKindGenres];
                
                if(newArr[index].checked) {
                    newArr[index].checked = false;
                    setAllKindGenres(newArr);
                } else {
                    newArr[index].checked = true;
                    setAllKindGenres(newArr);
                }
    
                if(_genre) {
                    const remove__genre = genres.filter(id => id !== e.target.value);
                    setGenres(remove__genre);
                } else {
                    setGenres((prev) => [...prev, e.target.value]);
                }
            }
        })
      
    }

    useEffect(() => {
        let genre_list = '';
        if(genres.length > 0) {
            genre_list = genres.join("%2C");
        } 

        const reponseData = async () => {
            const response =  await axios.get(requests.discover+genre_list);
            setData(response.data.results);
        }

        reponseData();
    }, [genres])

    console.log(genres);
    return (
        <div className="list__movies">
            <div className="list__movies__sidebar">
                

                    {allKindGenres.map((data, index) => {
                        return <label className="checkbox">
                                    <input type="checkbox" className="input__checkbox" id={data.name + ' checkbox'} 
                                    value={data.id} checked={data.checked} onChange={onChecked(index)}/>
                                    {data.name}
                                </label>    
                    })}
                
            </div>
            <div className="list__movies__content">
                <MovieList data={data}/>
            </div>
        </div>
    )
}

export default List
