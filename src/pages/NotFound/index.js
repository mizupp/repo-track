import React from "react";
import { Link } from "react-router-dom";

 function NotFound() {
    return (
        <div id="oops">
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/search'>Search</Link>
        </div>
    )
}

export default NotFound;