import React from 'react'
import VideoPlayer from './VideoPlayer'
import { FindPoster } from "../functionsForComponents";
function Popup({selected, closePopup}) {
 
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.title}    <span> 
                    
                   </span></h2>
                    <div className="plot">
                        <img src={FindPoster(selected)} alt= '' />
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