import React, { useEffect } from "react";
import { Routes ,Route } from 'react-router-dom';
import { NavBar } from "./components/navbar";
import { Welcome, About, Search, NotFound } from './pages';

const App = () => {
    useEffect(() =>{
        console.log("Render")
    })
    return(
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/search" element={<Search />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </>
    );
}
export default App;