//API CALLS
// "https://api.themoviedb.org/3/search/movie?&api_key=<YOUR_API_KEY>&language=en-US&page=1&query=<YourSearchTerm>"
// "https://api.themoviedb.org/3/discover/movie?&api_key=<YOUR_API_KEY>&language=en-US&page=1&with_genres=<YourGenreId>"

import React from 'react';
import {Route} from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Search from './components/Search';
import Wishlist from './components/Wishlist';
// import {Watchlist, Array} from './components/Watchlist';
import './index.css'

class App extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return(
            <div>
                <Header />
                <Route path="/" exact render={props => (
                    <React.Fragment>
                        <Search />
                    </React.Fragment>
                )} />
                <Route path="/wishlist" render={props =>(
                    <Wishlist />
                )} />
                
            </div>
        )
    }
}

export default App