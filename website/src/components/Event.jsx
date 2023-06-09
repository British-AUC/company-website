import React from "react";
import {Link} from "react-router-dom"

export default function Event(props){
    return (
        <>
            <div className="event-container">
                <img src={props.image} alt="Event Image" />
                <strong>{props.title}</strong>
                <p>{props.description}</p>
                <div className="details">
                    <p><b>Date:</b> {props.date}</p>
                    <p><b>Time:</b> {props.time}</p>
                </div>
                <Link href={props.link}>
                    <button>Register now</button>
                </Link>
                <hr />
            </div>
        </>
    )
}