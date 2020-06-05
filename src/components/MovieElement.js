import React from 'react';
import MoviesLikeThis from './MoviesLikeThis';
import { FaRegStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
// import {Watchlist, Array} from "./Watchlist";

class MovieElement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Data: []
        }

        this.AddToWatchlist = this.AddToWatchlist.bind(this);
    }

    AddToWatchlist(event){
        Array.push(event.target.dataset.title);
        console.log(Array);
    }

    render(){
        return(
            this.props.searchBy === 'Title' ? 
            <div>
                <div className="similarMovie">
                    <div className="posterTitle">
                        <img src={"https://image.tmdb.org/t/p/original"+this.props.data.poster_path} className="posterTitle" alt="Movie Poster"/>
                        <div className="info">
                            <h1>{this.props.data.title}</h1>
                            <p>{this.props.data.overview}</p>
                            
                            <hr />

                            <div className="stats">
                                <span>
                                    < FaRegStar className="icon"/>
                                    <span>{this.props.data.vote_average}/10</span>
                                </span>
                                <span>
                                    <MdDateRange className="icon" />
                                    <span>{this.props.data.release_date}</span>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <MoviesLikeThis genres={this.props.data.genre_ids} id={this.props.data.id}/>
                </div>
            </div>  :

            <div className="similarMovie">
                <div className="posterTitle">
                    <img src={"https://image.tmdb.org/t/p/original"+this.props.data.poster_path} className="posterTitle" alt="Movie Poster"/>
                    <div className="info">
                        <h1>{this.props.data.title}</h1>
                        <p>{this.props.data.overview}</p>
                        
                        <hr />

                        <div className="stats">
                            <span>
                                < FaRegStar className="icon"/>
                                <span>{this.props.data.vote_average}/10</span>
                            </span>
                            <span>
                                <MdDateRange className="icon" />
                                <span>{this.props.data.release_date}</span>
                            </span>
                            <button onClick={this.AddToWatchlist} data-title ={this.props.data.title}>
                                Add to Watchlist
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}


export default MovieElement;