import React from "react";

export default function ContactInfo(props){
    return (
        <div className="information">
            <img src={props.icon} alt="Contact Icon" />
            <div className="details">
                <b>{props.title}</b>
                <p>{props.content1}</p>
                <p>{props.content2}</p>
                <p>{props.content3}</p>
            </div>
        </div>
    )
}