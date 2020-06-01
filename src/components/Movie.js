import React from 'react'
import { findName, FindPoster, FindGenre } from "../functionsForComponents";
function Movie({result, openPopup}) {
    
    return (
        <div className="result" onClick={() => openPopup(result.id, result.media_type)} >
            <img  src={FindPoster(result)} alt= ''/>
            <h3>{findName(result)}</h3>
            <h3> Popularity: {result.popularity}</h3>
            <h3>Genre: {FindGenre(result)}</h3>
        </div>
    )
    
}

export default Movie