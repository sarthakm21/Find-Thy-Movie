import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="hero">
                    <h1>Find Thy Movie</h1>
                    <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png" alt="Movie related background"/>
                </div>
            </header>
        )
    }
}
export default Header;