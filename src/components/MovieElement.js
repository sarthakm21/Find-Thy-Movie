import React from 'react';
import MoviesLikeThis from './MoviesLikeThis';
import { FaRegStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

function MovieElement(props){
        return(
            props.searchBy === 'Title' ? 
            <div>
                <div className="similarMovie">
                    <div className="posterTitle">
                        <img src={"https://image.tmdb.org/t/p/original"+props.data.poster_path} className="posterTitle" alt="Movie Poster"/>
                        <div className="info">
                            <h1>{props.data.title}</h1>
                            <p>{props.data.overview}</p>
                            
                            <hr />

                            <div className="stats">
                                <span>
                                    < FaRegStar className="icon"/>
                                    <span>{props.data.vote_average}/10</span>
                                </span>
                                <span>
                                    <MdDateRange className="icon" />
                                    <span>{props.data.release_date}</span>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <MoviesLikeThis genres={props.data.genre_ids} id={props.data.id}/>
                </div>
            </div>  :

            <div className="similarMovie">
                <div className="posterTitle">
                    <img src={"https://image.tmdb.org/t/p/original"+props.data.poster_path} className="posterTitle" alt="Movie Poster"/>
                    <div className="info">
                        <h1>{props.data.title}</h1>
                        <p>{props.data.overview}</p>
                        
                        <hr />

                        <div className="stats">
                            <span>
                                < FaRegStar className="icon"/>
                                <span>{props.data.vote_average}/10</span>
                            </span>
                            <span>
                                <MdDateRange className="icon" />
                                <span>{props.data.release_date}</span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>

        )
}

export default MovieElement;