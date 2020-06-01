import React from 'react'
import VideoPlayer from './VideoPlayer'
import { FindPoster } from "../functionsForComponents";
function Popup({selected, closePopup}) {
 
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.title} </h2>
                <p className="rating">Rating: {selected.vote_average}</p> 
                    <div className="plot">
                        <img src={FindPoster(selected)} alt= '' />
                        <p>
                        {selected.overview} 
                        <br/><br/>
                        <VideoPlayer/> 
                        </p>
                    </div>
                    <button className="close" onClick={closePopup}>
                        Close
                    </button>
                    
            </div>

        </section>
    )
}

export default Popup