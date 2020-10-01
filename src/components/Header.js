import React from 'react';
// import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <header>
                {/* <nav>
                    <Link to="/watchlist">Watchlist</Link>
                </nav> */}
                <div className="hero">
                    <h1 style={{color: "yellow", fontSize: "80px", textShadow: "13px 13px 13px black", fontWeight: "bold"}}>Find Thy Movie</h1>
                    <img src = "https://cdn.hipwallpaper.com/i/78/92/5D4wHq.jpg" style={{objectFit: "cover"}} alt="Movie background"/>
                    {/* <img src="https://i.pinimg.com/originals/a5/11/1d/a5111dd02c562d09778099b673cc47b8.jpg" alt="Movie related background"/> */}
                    {/* <img src="https://images.wallpapersden.com/image/download/star-wars-the-mandalorian_66569_2560x1080.jpg" alt="Movie related background"/> */}
                </div>
            </header>
        )
    }
}
export default Header;
