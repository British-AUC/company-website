import React from "react";

export function Values1(props){
    return (
        <div className="values-container">
            <img src={props.image} alt="Values Icon" />
            <p>{props.message}</p>
        </div>
    )
}

export function Values2(props2){
    return (
        <div className="values-container">
            <img src={props2.image} alt="Values Icon" />
            <p>{props2.message}</p>
        </div>
    )
}