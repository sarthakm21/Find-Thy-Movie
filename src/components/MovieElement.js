import React from 'react';

function MovieElement(props){

    
        return(

            // props.searchBy === 'Title' ? 

            <div className="movie">
                <img src={"https://image.tmdb.org/t/p/original"+props.data.poster_path} className="poster"/>
                <h1>{props.data.title}</h1>
                <p>{props.data.overview}</p>
                <span>{props.data.vote_average}</span>
            </div>

        )
}

export default MovieElement;