import React from "react";

export default function Testimonial(props){
    return (
        <>
            <div className="testimonial-container">
                <div className="testimonial-container-left">
                    <img src={props.image} alt="Testifier" />
                </div>
                <div className="testimonial-container-right">
                    <p className="message">{props.message}</p>
                    <div className="details">
                        <img src={props.icon} alt="Social Icon" />
                        <b className="name">{props.name}</b>
                    </div>
                    <p className="university">{props.university}</p>
                </div>
            </div>
        </>
    )
}