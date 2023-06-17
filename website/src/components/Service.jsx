import React from "react";

export default function Service(props){
    return (
        <>
            <div className="service">
                <div className="service-left">
                    <h3>{props.title}</h3>
                    <p>{props.paragraph_one}</p>
                    <p>{props.paragraph_two}</p>
                </div>
                <div className="service-right">
                    <img src={props.image} alt="Service Image" />
                </div>
            </div>
        </>
    )
}