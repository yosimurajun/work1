import axios from 'axios';

export const _axios = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
});
