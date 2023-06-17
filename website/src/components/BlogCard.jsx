import React from "react";;
import {Link} from "react-router-dom"
import person from "../assets/blog/person_icon.svg";
import calendar from "../assets/blog/calendar_icon.svg";

export default function BlogCard(props){
    return (
        <div className="blog-card">
            <img src={props.image} alt="Blog Image" />
            <div className="details">
                <b>{props.title}</b>
                <div className="details-sub">
                    <p><img src={person} alt="Person Icon" /> {props.writer}</p>
                    <p><img src={calendar} alt="Calendar Icon" /> {props.date}</p>
                </div>
                <button>
                    <Link to={props.link}>Read more</Link>
                </button>
            </div>
        </div>
    )
}