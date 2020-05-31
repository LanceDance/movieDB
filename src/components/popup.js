import React from 'react'

function Popup(props) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{props.selected.original_name} <span>
                   </span></h2>
                    <div className="plot">
                        <img src={props.selected.poster_path} />
                        <p>{props.selected.overview}</p>
                    </div>
                    <button className="close" onClick={props.closePopup}>
                        Close
                    </button>
            </div>

        </section>
    )
}

export default Popup