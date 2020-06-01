import React from 'react'
import Movie from './Movie'


// set of all results I filtred out persons from collection endopoint
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