import React from 'react'
import { render } from '@testing-library/react';

function Movie({result, openPopup}) {
    const img_url = "http://image.tmdb.org/t/p/w500/";
    let moviename = ''
    let genre = ''
    let genreMovie = ''
    
    if (result.title) {
        moviename = result.title
    }
    else {
        moviename = result.name
    }

    if (result.gender) {
        genreMovie = result.gender
        genre = result.gender
    }
    else {
        genreMovie = result.media_type
        genre = result.media_type
    }
    if (result.genre_ids.includes(99)) {
        genre = 'documentary'
    }
    // if (result.last_episode_to_air)
    return (
        <div className="result" onClick={() => openPopup(result.id, genreMovie)} >
            <img src={img_url+result.poster_path}/>
            <h3>{moviename}</h3>
            <h3> Ranking: {result.vote_average}</h3>
            <h3>Genre: {genre}</h3>
        </div>
    )
    
}

export default Movie