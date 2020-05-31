import React from 'react'
import Movie from './Movie'

function Results(props) {
    return (
        <section className="results">
            {props.results.map(result => (
                <Movie key= {result.id} result={result}/>
            ))}
        </section>
    )
}

export default Results