import axios from "axios"
import { ActionTypes } from '../actionTypes';

export const options = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjE4NzQ5MzdiZjcxZTYzMDMwODhkOTI2Zjk0ZjczZSIsInN1YiI6IjY0YzkyYzMxYjlhMGJkMDE0ZTZkZmM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5yK2E5OE_zWzn-d8LWPwwZ7k6Hn1AIQyG2uCLUkQ6k'
    }
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";


// POPULAR FILM GET
export const getFilms = () => (dispatch) => {
    axios.get("/movie/popular", options)
        .then((res) =>
            dispatch({
                type: ActionTypes.GET_FILMS,
                payload: res.data.results

            }));
};


// CATEGORIES FILM GET

export const getGenres = ()=>(dispatch)=>{
    axios.get("/genre/movie/list",options)
    .then((res)=>dispatch({
        type : ActionTypes.GET_GENRES,
        payload : res.data.genres
    }));

}