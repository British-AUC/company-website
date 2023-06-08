import React from "react";
import { Link } from "react-router-dom"

export default function FooterLinks(props){
    return (
        <div className="footer-info">
            <b>{props.title}</b>
            <Link to={props.target1}>{props.link1}</Link>
            <Link to={props.target2}>{props.link2}</Link>
            <Link to={props.target3}>{props.link3}</Link>
            <Link to={props.target4}>{props.link4}</Link>
        </div>
    )
}