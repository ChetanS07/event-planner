import React from 'react';
import Navbar from "../../Components/Navbar.jsx"
import Footer from '../../Components/Footer'
import { useNavigate } from "react-router-dom"

import "./index.css"

function App() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <section className='aboutbanner'>
                <div>
                    <h1>About Us</h1>
                </div>

            </section>
            <section className='aboutcontent'>
                <article>
                    <h2>Welcome to XYZ Company</h2>
                    <p>
                        Welcome to Event Planners Listing! We are a one-stop destination for all your event planning needs. Our mission is to make the planning process easier and more efficient for event planners and organizers.

                        We are dedicated to bringing you the best event planning services in the industry. We offer a comprehensive list of event planners, vendors, and resources to help you plan the perfect event. From finding the perfect venue to selecting the right catering services – we’ve got you covered.

                        Our team of experts is here to help you every step of the way. With our comprehensive list of event planners, vendors, and resources, you are sure to find the perfect fit for your event. We are committed to providing you with the best customer service and the most efficient event planning experience.

                        If you have any questions or need help finding the perfect event planner or vendor, please do not hesitate to contact us. We look forward to helping you plan your dream event!

                    </p>
                    <p>
                        We are an online directory of professional event planners, designed to help clients find the right event planner for their needs and budget. Our site is the perfect place to find the most experienced and knowledgeable event planners in the business.

                        Our easy-to-use search engine allows you to quickly locate event planners in your area, and our comprehensive profiles provide you with the information you need to make an informed decision. We provide detailed information about each event planner, including their experience, services offered, and rates.

                        At Event Planners Listing, we strive to make the process of finding the right event planner easy and stress-free. We are committed to providing our users with the highest quality services and resources, and we are proud to be a trusted source for finding the best event planners in the business.

                        Thank you for visiting Event Planners Listing! We look forward to helping you find the perfect event planner for your next event.
                    </p>
                    <button
                        onClick={() => {
                            navigate('/services')
                        }}
                    >
                        Checkout our Services</button>
                </article>

            </section>
            <Footer />
        </div>
    );
}

export default App;