import React from "react";

export default function TeamMember(props){
    return (
        <div className="team-member">
            <img src={props.image} alt={props.name} />
            <p className="title">{props.title}</p>
            <p className="name">{props.name}</p>
        </div>
    )
}