import React from "react";
import whatsapp from "../assets/whatsapp.png"

export default function WhatsApp(){
    return (
        <div className="whatsapp">
            <a href="https://wa.link/16iyyk" target="_blank">
                <img src={whatsapp} alt="WhatsApp Icon" />
            </a>
        </div>
    )
}