import React from "react";
import { Routes ,Route } from 'react-router-dom';

import  NavBar from "./navbar";
import { Welcome, About, Search, NotFound } from './pages';
const Main = () => {
    return (
        <>
          <NavBar />

        </>
    );
}

export default Main;