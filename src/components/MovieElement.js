import React from 'react';
import MoviesLikeThis from './MoviesLikeThis';

function MovieElement(props){
        return(

            props.searchBy === 'Title' ? 
            <div>
                <div className="movieByTitle">
                    <img src={"https://image.tmdb.org/t/p/original"+props.data.poster_path} className="posterTitle"/>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.overview}</p>
                    <span>{props.data.vote_average}</span>
                </div>

                <div>
                    <MoviesLikeThis genres={props.data.genre_ids} id={props.data.id}/>
                </div>
            </div>
            

            :

            <div className="movieByGenre">
                <img src={"https://image.tmdb.org/t/p/original"+props.data.poster_path} className="posterGenre"/>
                <h1>{props.data.title}</h1>
            </div>

        )
}

export default MovieElement;