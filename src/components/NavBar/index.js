import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "./styles.css"
const NavBar = () => {
    const navigate = useNavigate();

    return(
        <nav>
            
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeclassname="active" to="/about">About</NavLink>
            <NavLink activeclassname="active" to="/search">Search</NavLink>

            <button onClick={ () => navigate(-1) }>Back</button>
        </nav>
    );
}

export default NavBar;