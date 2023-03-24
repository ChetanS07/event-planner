import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Styles/styles.css"


function App() {
    return (
        <div id='footer'>
            <section className='left-section'>
                <h2>Logo</h2>
                <p>A Event Planner Listing Company....</p>
            </section>
            <section className='mid-section'>
                <h3>Social Links</h3>
                <ul>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Linked In</li>
                </ul>
            </section>
            <section className='right-section'>
                <h3>Quick Links</h3>
                <ul>
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
            </section>
        </div>
    );
}

export default App;