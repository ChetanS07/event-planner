import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//css
import "./Styles/styles.css"

function App() {
    return (
        <nav id='navbar'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <ul className='navlinks'>
                <li>
                    <Link className='navlink' to="/">Home</Link>
                </li>
                <li>
                    <Link className='navlink' to="/about">About</Link>
                </li>
                <li>
                    <Link className='navlink' to="/services">Services</Link>
                </li>
                <li>
                    <Link className='navlink' to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default App;