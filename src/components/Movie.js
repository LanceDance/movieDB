import React from 'react'

function Movie(props) {
    console.log(props.result.original_name)
    const img_url = "http://image.tmdb.org/t/p/w500/";
    let moviename = ''
    if (props.result.title) {
        moviename = props.result.title
    }
    else {
        moviename = props.result.name
    }
    return (
        <div className="result">
            <img src={img_url+props.result.poster_path}/>
            <h3>{moviename}</h3>
        
        </div>
    )
    
}

export default Movie