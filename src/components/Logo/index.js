import React from 'react'
import './styles.css'

const Logo = () => {
    return (
        <div className='logo'>
            <img src='./favicon.svg' alt='Logo'></img>
            <span >GitHub </span>
            <h2>Choose a GitHub user to <span style={{
                textDecoration: 'line-through'}}>Find</span> Follow</h2>
        </div>
    )
}

export default Logo;
