import React from 'react';
import "./Styles/styles.css"

import companyImg from "../Assets/company1.jpeg"

function App(props) {
    return (
        <div style={{ padding: "2rem 15rem", position: "absolute", height: "140vh", top: "6.3rem", left: "0", background: "rgb(1, 1, 2)" }}>
            <section className='companywrapper'>

                <div className='inwrapper'>
                    <div className='pimagewrapper'>
                        <img src={companyImg}></img>
                    </div>
                    <h2 className='pnamewrapper'>
                        {props.name}
                    </h2>
                </div>

                <aritlce className='companydetailswrapper'>
                    <p>{props.about}
                    </p>
                    <p><b>Phone no. </b>: 1234567890</p>
                    <p><b>email</b> : fasdfsda@gamil.com</p>
                </aritlce>

            </section>
            <button
                className='closebutton'
                onClick={props.click}
            >
                X
            </button>
        </div>
    );
}

export default App;
<div>

</div>