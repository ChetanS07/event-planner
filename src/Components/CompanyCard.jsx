import React, { useState } from 'react';
import { render } from 'react-dom';

import company1 from "../Assets/company1.jpeg"

import CompanyPage from "./companyPage"

function App(props) {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            {show && <CompanyPage name={props.companyName} about={props.companyDesc} phone={props.phone} email={props.email} click={handleClick} />}
            <div className='cardwrapper'>
                <div className='imagewrapper'>
                    <img src={company1} />
                </div>
                <article className='contentwrapper'>
                    <h1>{props.companyName}</h1>
                    <p>{props.companyDesc.slice(0, 350)}</p>

                    <button
                        onClick={handleClick}
                    >
                        Get More Details
                    </button>
                </article>

            </div>
        </div>

    );
}

export default App;