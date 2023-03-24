import React from 'react';
import { useNavigate } from "react-router-dom"
import Navbar from "../../Components/Navbar.jsx"
import Footer from "../../Components/Footer"

import quoteImage from "../../Assets/quote.jpg"

import "./index.css"

function App() {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <section id='herosection'>
                <div className='hleftsection'>
                    <h1>Event Planner Finder</h1>
                    <p>We are Delighted to Serve You...</p>
                </div>
                <div className='hrightsection'>
                    <button
                        onClick={() => {
                            navigate('/planners')
                        }}
                    >
                        Find a Event Planner for You...
                    </button>
                </div>

            </section>
            <section id='aboutsection'>
                <div className='aleftsection'>
                    <h2>About Us...</h2>
                </div>
                <div className='arightsection'>

                    <p>
                        At ABC Event Planners, we specialize in helping you create the perfect event for any occasion. Our team of experienced event planners is ready to turn your vision into a reality. We provide a wide range of services, from wedding planning to corporate events. Whether you need help with the entire planning process or just need a few details attended to, we're here to help.
                        We strive to make sure that each event is executed flawlessly and that all of your expectations are met. We understand the importance of creating a stress-free environment while still delivering a memorable and successful event. With our years of experience, we are confident that we can provide you with the highest quality service and create an event that you will never forget.

                    </p>

                    <button
                        onClick={() => {
                            navigate('/about')
                        }}
                    >
                        Click here to Know More About Us...</button>
                </div>
            </section>
            <div style={{ border: "1px solid", width: "85%", marginLeft: "6rem" }}></div>
            <section id='formsection'>
                <div className='fleftsection'>
                    <img src={quoteImage}/>
                    <h2>
                        Get Quote From Us...
                    </h2>
                </div>
                <form className='form'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Phone' />
                    <input type="text" placeholder='Type of Event' />
                    <button type='submit' onClick={() => { alert("We'll get back to you...") }}>Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default App;