import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "./styles.css"
const NavBar = () => {
    const navigate = useNavigate();

    return(
        <nav>
            
            <NavLink className="home-link" to="/"><i class="fa-solid fa-book-open"> </i> Overview</NavLink>
            <NavLink activeclassname="active" to="/repositories"><i class="fa-regular fa-bookmark"></i> Repositories</NavLink>
            <NavLink activeclassname="active" to="/projects"><i class="fa-solid fa-table-list"></i> Projects</NavLink>
            <NavLink activeclassname="active" to="/packages"><i class="fa-solid fa-cube"></i> Packages</NavLink>
            <NavLink activeclassname="active" to="/stars"><i class="fa-regular fa-star"></i> Stars</NavLink>
            <button id="backbtn" onClick={ () => navigate(-1) }>Back</button>
        </nav>
    );
}

export default NavBar;