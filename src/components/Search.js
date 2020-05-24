import React from 'react';

class Search extends React.Component{

    constructor(){
        super();
        this.state = {
            Title: '',
            Genre: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(){
        
        let title = this.state.Title;
        let genre = this.state.Genre;

        title !== '' ?
        
        fetch('https://api.themoviedb.org/3/search/movie?&api_key=d8e52cfe853c236aa9202987892815bf&language=en-US&page=1&query='+title)
                .then(data => data.json())
                .then(data => console.log(data.results))
                .catch(err => console.log(err))

                :

        fetch('https://api.themoviedb.org/3/discover/movie?&api_key=d8e52cfe853c236aa9202987892815bf&language=en-US&page=1&with_genres='+genre)
                .then(data => data.json())
                .then(data => console.log(data.results))
                .catch(err => console.log(err))
             
    }

    handleChange(event){
        let name = event.target.name;
        let val = event.target.value;
        
        name === 'Genre' ? 
            this.setState({
                Genre: val,
                Title: ''
            })           :
        
            this.setState({
                Genre: '',
                Title: val
            })

        this.fetchData();
    }

    render(){
        return(
            <div>
                <form>
                    <input type='text' name='Title' placeholder='Movie Name' onChange={this.handleChange} value={this.state.Title}/>
                    <span>OR</span>
                    {/* <input type='text' name='Genre' placeholder='Genre' onChange={this.handleChange} value={this.state.Genre}/> */}

                    <select name='Genre' onChange={this.handleChange} value={this.state.Genre}>
                        <option value=''>--- Select A Genre ---</option>
                        <option value='28'>Action</option>
                        <option value='12'>Adventure</option>
                        <option value='16'>Animation</option>
                        <option value='35'>Comedy</option>
                        <option value='80'>Crime</option>
                        <option value='99'>Documentary</option>
                        <option value='18'>Drama</option>
                        <option value='10751'>Family</option>
                        <option value='14'>Fantasy</option>
                        <option value='36'>History</option>
                        <option value='27'>Horror</option>
                        <option value='10402'>Music</option>
                        <option value='28'>Mystery</option>
                        <option value='10749'>Romance</option>
                        <option value='878'>Science Fiction</option>
                        <option value='10770'>TV Movie</option>
                        <option value='53'>Thriller</option>
                        <option value='10752'>War</option>
                        <option value='37'>Western</option>
                    </select>
                </form>

                <div>
                    <h1>{this.state.Title}</h1>
                    <h1>{this.state.Genre}</h1>
                </div>
            </div>

        )
    }
}

export default Search;