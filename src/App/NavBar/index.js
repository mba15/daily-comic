import React from "react"
import {Link} from "react-router-dom";

function NavBar(props){
    return(
        <div className="navbar">
            <Link to="/" className="navlink">  Home   </Link>
            <Link to="/random" className="navlink">  Random   </Link>
            <Link to="/select" className="navlink">  Select   </Link>
        </div>
    )
}

export default NavBar;