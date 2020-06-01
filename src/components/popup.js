import React from 'react'
import VideoPlayer from './VideoPlayer'
import {picture, imgUrl} from '../pictures'
function Popup({selected, closePopup}) {
    let poster = imgUrl+selected.poster_path
    if (selected.poster_path === null) {
        poster = picture
    }
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.title}    <span> 
                    
                   </span></h2>
                    <div className="plot">
                        <img src={poster} alt= '' />
                        <p>
                        {selected.overview} 
                        <br/><br/>
                        <VideoPlayer/> 
                         
                         
                        </p>
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