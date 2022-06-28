import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'
// import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <div className="Box-landig">
            <h1>WELCOME</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo 
                voluptatem perspiciatis, amet velit, possimus aliquid facere 
                veritatis fugiat tempora odit nam nihil cum minus ab blanditiis alias, excepturi qui accusamus.</p>
                <Link to='/countries'>START</Link>
        </div>
    );
}

export default Landing;