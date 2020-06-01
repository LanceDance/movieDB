import React from 'react'

function Popup({selected, closePopup}) {
    const img_url = "http://image.tmdb.org/t/p/w500/";
    console.log(selected)
    return (
        <section className="popup">
            <div className="content">
                <h2>Name <span> Year
                   </span></h2>
                    <div className="plot">
                        <img src={img_url+selected.poster_path} />
                        <p>{selected.overview}</p>
                    </div>
                    <button className="close" onClick={closePopup}>
                        Close
                    </button>
            </div>

        </section>
    )
}

export default Popup