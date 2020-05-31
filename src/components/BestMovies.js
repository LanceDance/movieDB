import React from 'react';
import Movie from './Movie'
import axios from 'axios';

export default class BestMovies extends React.Component {
  state = {
    movies: []
  }
  
  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=efb6a90a6e954769821cddc6d87e9acb&language=en-US&page=1`)
      .then(res => {
        const movies = res.data.results;
        this.setState({ movies });
      })
  }

  render() {
    return (
      <section className="results">
        { this.state.movies.map(movie => (
            <Movie key={movie.id} result= {movie}/>
        ))}
      </section>
    )
  }
}