import React from "react";
import image1 from "../assets/services/image1.png"

export default function Service(){
    return (
        <>
            <div className="service">
                <div className="service-left">
                    <h3>Education and Career Counseling</h3>
                    <p>
                        At British AUC, our highly qualified and experienced 
                        counsellors are dedicated to guiding you towards the 
                        right academic path and helping you make informed 
                        decisions about your future career. 
                    </p>
                    <p>
                        We understand that budget constraints can be a factor 
                        in studying abroad, and we strive to assist you in 
                        finding affordable universities that align with your 
                        financial resources.
                    </p>
                </div>
                <div className="service-right">
                    <img src={image1} />
                </div>
            </div>
        </>
    )
}