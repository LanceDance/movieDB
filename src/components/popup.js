import React from 'react'
import VideoPlayer from './VideoPlayer'
function Popup({selected, closePopup}) {
    const imgUrl = "http://image.tmdb.org/t/p/w500/";
    let poster = imgUrl+selected.poster_path

    if (selected.poster_path === null) {
        poster = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
    }
    console.log(selected)
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.title}    <span> 
                    
                   </span></h2>
                    <div className="plot">
                        <img src={poster} alt= '' />
                        <p>{selected.overview}  
                        <VideoPlayer/>  </p>
                    <p>Popularity: {selected.popularity}</p>
                    </div>
                    <button className="close" onClick={closePopup}>
                        Close
                    </button>
                    
            </div>

        </section>
    )
}

export default Popup