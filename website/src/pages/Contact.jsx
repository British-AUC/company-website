import React from "react"
import ContactInfoForm from "../components/Contact_Info_Form"

export default function Contact(){
    return (
        <>
        {/* SECTION FIFTEEN */}
            <section className="section-fifteen">
                <h2>Get in touch with us</h2>
                <p id="contact">
                    Got questions? Leave your details below and a 
                    customer representative will reach out to you 
                    within 24 hours.
                </p>
                <div className="section-six-sub">
                    <ContactInfoForm/>
                </div>
            </section>
        </>
    )
}