import {apiKey} from './Apikey'


export const moviesTop = "https://api.themoviedb.org/3/movie/top_rated?api_key="+apiKey+"&language=en-US&page=1"; 
export const moviesDocuments = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&page=1&with_genres=99";
export const moviesFamilies = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&page=1&with_genres=10751"
export const tvTop = "https://api.themoviedb.org/3/tv/top_rated?api_key="+apiKey+"&language=en-US&page=1";
export const searchUrlMulti = "https://api.themoviedb.org/3/search/multi?api_key="+apiKey+"&query=";




