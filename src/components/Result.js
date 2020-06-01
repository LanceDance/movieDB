import React from 'react'
import Movie from './Movie'


// set of all results I filtred out persons from collection endopoint
function Results({results, openPopup}) {
    return (
        <section className="results">
            {results.map((result, idx) => (
                result.media_type === "person" ?
                null
                : <Movie key= {idx} result={result} openPopup={openPopup} />
            ))
            }
        </section>
    )
}

export default Results