import React from 'react';
import { MdMovie } from "react-icons/md";


class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <MdMovie className="icon"/>
                    <h1>Find Thy Movie</h1>
                </nav>
                <div>
                    <img src="https://images.unsplash.com/photo-1518534532449-21e053ec3dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80" alt="Movie related background"/>
                </div>
            </header>
        )
    }
}

export default Header;