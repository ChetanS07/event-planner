import React from 'react';
import Navbar from "../../Components/Navbar.jsx"
import Footer from "../../Components/Footer"

import "./index.css"

function App() {
    return (
        <div>
            <Navbar />
            <section className='contactdetails'>
                <p className='contactdesc'>Thank you for visiting our website. We hope you found everything you were looking for.

                    If you have any further questions or would like to discuss our services in more detail, please don't hesitate to contact us. We would be more than happy to help.

                    Thank you again for your interest.
                </p>
                <div className='contactinfo'>
                    <h2>Our Address</h2>
                    <div>
                        <p>ABC Limited</p>
                        <p>XYZ Street, Malleshwaram</p>
                        <p>Bangalore - 560051</p>
                    </div>
                    <h2>Get to us </h2>
                    <div>
                        <p>+91 9876543210</p>
                        <p>xyzabc@gmail.com</p>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    );
}

export default App;