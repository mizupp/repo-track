import React, {useState, useEffect} from "react";
import getResult from "../../actions";
import {useDispatch} from "react-redux";

import "./styles.css";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const updateInput = (e) => {
        setUser(e.target.value);
    }

    const searchForUser = (user) => dispatch(getResult(user))

    const handleSubmit = (e) => {
        e.preventDefault();
        searchForUser(user);
        setUser("")
    }

    useEffect(() => { searchForUser("mizupp")}, [getResult])
    
    return(
        <form id="searchform" onSubmit={handleSubmit} aria-label="Search">
            <label id="searchlabel" htmlFor="user">Search</label>
            <input type="text" id="user" value={user} onChange={updateInput} />
            {/* <input type="submit" value="🔍" /> */}
            <i id="searchbtn" input type="submit" class="fa-solid fa-magnifying-glass"></i>
        </form>
    )
};

export default SearchBar;