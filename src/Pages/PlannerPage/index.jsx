import React from 'react';
import Navbar from "../../Components/Navbar.jsx"
import Footer from "../../Components/Footer"
import CompanyCard from "../../Components/CompanyCard"

import CompanyPage from "../../Components/companyPage"

import { useState } from 'react';

import "./index.css"

function App() {

    const [cEvent, setEvent] = useState("");

    const bdayPlanners = [
        {
            id: 2,
            name: "Company 2",
            image: "image2",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed elementum. Odio euismod lacinia at quis. Urna nunc id cursus metus aliquam. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Malesuada fames ac turpis egestas sed tempus urna. Lacus vel facilisis volutpat est velit egestas dui id ornare. Ac felis donec et odio pellentesque diam volutpat commodo sed. Donec adipiscing tristique risus nec feugiat in. Sit amet est placerat in egestas erat imperdiet sed euismod. Et netus et malesuada fames ac turpis egestas. Commodo quis imperdiet massa tincidunt nunc. Massa tempor nec feugiat nisl pretium fusce id.Pharetra diam sit amet nisl suscipit adipiscing.Purus gravida quis blandit turpis cursus in hac habitasse.Egestas quis ipsum suspendisse ultrices gravida dictum.Ridiculus mus mauris vitae ultricies leo integer.Volutpat blandit aliquam etiam erat velit scelerisque in.Fringilla phasellus faucibus scelerisque eleifend donec pretium.Ornare arcu dui vivamus arcu felis bibendum ut tristique et.Quis varius quam quisque id diam vel.Tellus pellentesque eu tincidunt tortor.Erat velit scelerisque in dictum non consectetur a erat.Eleifend mi in nulla posuere sollicitudin.Amet justo donec enim diam.",
            phone: "1234524434",
            email: "fasfasfasdf@gamialf.coam"
        },
    ]

    const weddingPlanners = [
        {
            id: 1,
            name: "Company 1",
            image: "image1",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed elementum. Odio euismod lacinia at quis. Urna nunc id cursus metus aliquam. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Malesuada fames ac turpis egestas sed tempus urna. Lacus vel facilisis volutpat est velit egestas dui id ornare. Ac felis donec et odio pellentesque diam volutpat commodo sed. Donec adipiscing tristique risus nec feugiat in. Sit amet est placerat in egestas erat imperdiet sed euismod. Et netus et malesuada fames ac turpis egestas. Commodo quis imperdiet massa tincidunt nunc. Massa tempor nec feugiat nisl pretium fusce id.Pharetra diam sit amet nisl suscipit adipiscing.Purus gravida quis blandit turpis cursus in hac habitasse.Egestas quis ipsum suspendisse ultrices gravida dictum.Ridiculus mus mauris vitae ultricies leo integer.Volutpat blandit aliquam etiam erat velit scelerisque in.Fringilla phasellus faucibus scelerisque eleifend donec pretium.Ornare arcu dui vivamus arcu felis bibendum ut tristique et.Quis varius quam quisque id diam vel.Tellus pellentesque eu tincidunt tortor.Erat velit scelerisque in dictum non consectetur a erat.Eleifend mi in nulla posuere sollicitudin.Amet justo donec enim diam.",
            phone: "1234524434",
            email: "fasfasfasdf@gamialf.coam"
        },

        {
            id: 3,
            name: "Company 3",
            image: "image3",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed elementum. Odio euismod lacinia at quis. Urna nunc id cursus metus aliquam. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Malesuada fames ac turpis egestas sed tempus urna. Lacus vel facilisis volutpat est velit egestas dui id ornare. Ac felis donec et odio pellentesque diam volutpat commodo sed. Donec adipiscing tristique risus nec feugiat in. Sit amet est placerat in egestas erat imperdiet sed euismod. Et netus et malesuada fames ac turpis egestas. Commodo quis imperdiet massa tincidunt nunc. Massa tempor nec feugiat nisl pretium fusce id.Pharetra diam sit amet nisl suscipit adipiscing.Purus gravida quis blandit turpis cursus in hac habitasse.Egestas quis ipsum suspendisse ultrices gravida dictum.Ridiculus mus mauris vitae ultricies leo integer.Volutpat blandit aliquam etiam erat velit scelerisque in.Fringilla phasellus faucibus scelerisque eleifend donec pretium.Ornare arcu dui vivamus arcu felis bibendum ut tristique et.Quis varius quam quisque id diam vel.Tellus pellentesque eu tincidunt tortor.Erat velit scelerisque in dictum non consectetur a erat.Eleifend mi in nulla posuere sollicitudin.Amet justo donec enim diam.",
            phone: "1234524434",
            email: "fasfasfasdf@gamialf.coam"
        },
    ]

    const meetingPlanners = [
        {
            id: 4,
            name: "Company 4",
            image: "image4",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed elementum. Odio euismod lacinia at quis. Urna nunc id cursus metus aliquam. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Malesuada fames ac turpis egestas sed tempus urna. Lacus vel facilisis volutpat est velit egestas dui id ornare. Ac felis donec et odio pellentesque diam volutpat commodo sed. Donec adipiscing tristique risus nec feugiat in. Sit amet est placerat in egestas erat imperdiet sed euismod. Et netus et malesuada fames ac turpis egestas. Commodo quis imperdiet massa tincidunt nunc. Massa tempor nec feugiat nisl pretium fusce id.Pharetra diam sit amet nisl suscipit adipiscing.Purus gravida quis blandit turpis cursus in hac habitasse.Egestas quis ipsum suspendisse ultrices gravida dictum.Ridiculus mus mauris vitae ultricies leo integer.Volutpat blandit aliquam etiam erat velit scelerisque in.Fringilla phasellus faucibus scelerisque eleifend donec pretium.Ornare arcu dui vivamus arcu felis bibendum ut tristique et.Quis varius quam quisque id diam vel.Tellus pellentesque eu tincidunt tortor.Erat velit scelerisque in dictum non consectetur a erat.Eleifend mi in nulla posuere sollicitudin.Amet justo donec enim diam.",
            phone: "1234524434",
            email: "fasfasfasdf@gamialf.coam"
        }
    ]

    return (
        <div>
            <Navbar />

            <div id='plannerpage'>

                <section className='leftsection'>
                    <h1>Select Type of Event </h1>
                    <div>
                        <button
                            onClick={() => {
                                setEvent("bday")
                            }}
                        >
                            Birthday/Parties
                        </button>
                        <button
                            onClick={() => {
                                setEvent("marriage")

                            }}
                        >
                            Weddings/Functions
                        </button>
                        <button
                            onClick={() => {
                                setEvent("meetings")

                            }}
                        >
                            Meetings/Seminars
                        </button>

                    </div>
                </section>

                <div className='line'></div>

                <section className='rightsection'>

                    {
                        cEvent === "bday" ?
                            bdayPlanners.map((company) => {
                                return <CompanyCard companyName={company.name} companyDesc={company.about} companyImage={company.image} companyPhone={company.phone} companyEmail={company.email} />
                            })
                            : <></>

                    }
                    {
                        cEvent === "marriage" ?
                            weddingPlanners.map((company) => {
                                return <CompanyCard companyName={company.name} companyDesc={company.about} companyImage={company.image} companyPhone={company.phone} companyEmail={company.email} />
                            })
                            : <></>

                    }
                    {
                        cEvent === "meetings" ?
                            meetingPlanners.map((company) => {
                                return <CompanyCard companyName={company.name} companyDesc={company.about} companyImage={company.image} companyPhone={company.phone} companyEmail={company.email} />
                            })
                            : <></>

                    }

                    {cEvent === "" ? <h2>Note : select an Event Type to load Companies</h2> : <></>}
                </section>

            </div>
            {/* <CompanyPage /> */}
            <Footer />
        </div>
    );
}

export default App;