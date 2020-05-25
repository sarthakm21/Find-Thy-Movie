import React from 'react';

function AddMovie(props){

    if(props.id !== props.data.id)
    return(
        <div className="similarMovie">
            <img src={"https://image.tmdb.org/t/p/original"+props.data.poster_path} className="posterTitle"/>
            <h1>{props.data.title}</h1>
            <p>{props.data.overview}</p>
            <span>{props.data.vote_average}</span>
            {/* <div onClick="handleClick" className='KnowMore'>Know More</div> */}
        </div>
    )

    else
    return null;
}

export default AddMovie;