import React from "react";
import whatsapp from "../assets/whatsapp.svg"

export default function WhatsApp(){
    return (
        <div className="whatsapp" title="Speak to our Customer Representative on Whatsapp">
            <a href="https://wa.link/16iyyk" target="_blank">
                <img src={whatsapp} alt="WhatsApp Icon" />
            </a>
        </div>
    )
}