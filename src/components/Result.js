import React from 'react'
import Movie from './Movie'

function Results({results, openPopup}) {
    return (
        <section className="results">
            {results.map(result => (
                result.media_type === "person" ?
                null
                : <Movie key= {result.id} result={result} openPopup={openPopup} />
            ))}
        </section>
    )
}

export default Results