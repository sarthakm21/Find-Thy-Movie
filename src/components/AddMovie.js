import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";


function AddMovie(props){


    if(props.id !== props.data.id)
    return(
        <div className="similarMovie">
            <h1>{props.data.title}</h1>
            <div className="info">
                <img src={"https://image.tmdb.org/t/p/original"+props.data.poster_path} className="posterTitle" alt="Poster"/>
                <p>{props.data.overview}</p>
            </div>
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
    )

    else
    return null;
}

export default AddMovie;