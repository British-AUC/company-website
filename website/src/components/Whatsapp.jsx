import React from "react";
import whatsapp from "../assets/whatsapp.png"

export default function WhatsApp(){
    return (
        <div className="whatsapp">
            <a href="#">
                <img src={whatsapp} alt="WhatsApp Icon" />
            </a>
        </div>
    )
}