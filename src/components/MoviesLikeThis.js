import React from 'react';
import AddMovie from './AddMovie';

class MoviesLikeThis extends React.Component{
    constructor(){
        super();
        this.state={
            Data: []
        }
        this.getData = this.getData.bind(this);
    }

    getData(){
        let url = "https://api.themoviedb.org/3/discover/movie?&api_key=d8e52cfe853c236aa9202987892815bf&language=en-US&page=1&with_genres="
        let count=0;
        for(let genre of this.props.genres){
            if(count!==0)
            url+="|";

            url+=genre+'';
            count++;
        }

        url+="&sort_by=vote_average.desc&page=1&vote_count.gte=10000";


        fetch(url)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    Data: data.results
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        this.getData();

        const similarMovies = this.state.Data.map((element) => (
            <AddMovie key={element.id} data={element} id={this.props.id}/>
        ))

        return(
            <div className="container">
                <h1>Some more movies like this : </h1>
                {similarMovies}
            </div>
        )
    }
}

export default MoviesLikeThis;
