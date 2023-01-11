import React, { useEffect } from "react";
import { Routes ,Route } from 'react-router-dom';
import  NavBar from "./components/navbar";
import { Welcome, About, Search, NotFound } from './pages';
import {Main} from "./pages";
import "./App.css"
const App = () => {
    useEffect(() =>{
        console.log("Render")
    })
    return(
        <>

    <NavBar />
    <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/repositories" element={<Welcome />} />
                <Route exact path="/projects" element={<About />} />
                <Route exact path="/packages" element={<About />} />
                <Route exact path="/stars" element={<About />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>

    {/* <Welcome id="block" /> */}
    
        </>
    );
}
export default App;