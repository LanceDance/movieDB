import React from 'react'
import { render } from '@testing-library/react';

function Movie({result, openPopup}) {
    const img_url = "http://image.tmdb.org/t/p/w500/";
    let moviename = ''
    let gender = ''
    if (result.title) {
        moviename = result.title
    }
    else {
        moviename = result.name
    }

    if (result.gender) {
        gender = result.gender
    }
    
    // else if (99 in result.genres) {
    //     gender = 'documentary'
    // }
    else {
        gender = result.media_type
    }
    console.log(result.genre_ids)
    if (result.genre_ids.find(99)) {
        gender = 'documentary'
    }
    // if (result.last_episode_to_air)
    return (
        <div className="result" onClick={() => openPopup(result.id, gender)} >
            <img src={img_url+result.poster_path}/>
            <h3>{moviename}</h3>
            <h3> Ranking: {result.vote_average}</h3>
            <h3>Gender: {gender}</h3>
        </div>
    )
    
}

export default Movie