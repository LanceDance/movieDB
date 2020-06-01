import React from 'react'

function Search(props) {
    return ( 
        <section className="searchbox-wrap">
            <input type="text" placeholder="Search if you want to go back search for empty text" 
            className="searchbox" onChange={props.handleInput} 
            onKeyPress={props.search}/>
        </section>

    )


}

export default Search 