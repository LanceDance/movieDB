import React from 'react'
import { picture, imgUrl } from "../pictures";
function Movie({result, openPopup}) {
    const img_url = imgUrl;
    let moviename = ''
    let genre = ''
    let genreMovie = ''
    let poster = ''
    poster = img_url+result.poster_path
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
    else if (result.genre_ids.includes(10751)) {
        genre = 'family'
        genreMovie = 'movie'
    }

    if (result.poster_path === null) {
        poster = picture
    }
    return (
        <div className="result" onClick={() => openPopup(result.id, genreMovie)} >
            <img  src={poster} alt= ''/>
            <h3>{moviename}</h3>
            <h3> Ranking: {result.vote_average}</h3>
            <h3>Genre: {genre}</h3>
        </div>
    )
    
}

export default Movie