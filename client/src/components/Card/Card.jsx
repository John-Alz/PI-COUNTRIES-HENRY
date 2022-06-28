import React from "react";
import './Card.css'

export default function Card(props){
    return (
        <div className="Card">
            <div className="imgContainer">
                <img className="img" src={props.flag} alt="Flag" />
            </div>
            <div className="container">
                <h4>{props.name}</h4>
                <h4>Region: <span className="span-card">{props.region}</span></h4>
            </div>
        </div>
    )
}