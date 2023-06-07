import React from "react";

export default function Metrics(props){
    return (
        <div className="metric">
            <b>{props.value}</b>
            <p>{props.message}</p>
        </div>
    )
}