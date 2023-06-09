import React from "react";
import file from "../assets/file.svg";
import ContactInfo from "../components/ContactInfo";
import contactdata from "../data/contactinfo";

export default function ContactInfoForm(){
    const contactinformation = contactdata.map(item => <ContactInfo key={item.id} {...item} />)

    return (
        <>
            <div className="section-six-left">
                {contactinformation}
            </div>
            <form className="section-six-right">
                <div className="inputs">
                    <input type="text" name="" id="" placeholder="First Name*" required />
                    <input type="text" name="" id="" placeholder="Last Name*" required />
                </div>
                <div className="inputs">
                    <input type="email" name="" id="" placeholder="Email Address*" required />
                    <input type="tel" name="" id="" placeholder="Phone Number*" required />
                </div>
                <div className="inputs">
                    <input type="text" name="" id="" placeholder="Intended Course of Study" />
                    <input type="text" name="" id="" placeholder="Intended Country of Study" />
                </div>
                <div className="inputs">
                    <input type="email" name="" id="" placeholder="University of Interest" />
                    <input type="tel" name="" id="" placeholder="Your Estimated Budget" />
                </div>
                <textarea name="" id="" rows="5" placeholder="Message*" required ></textarea>
                <div className="inputs2">
                    <label htmlFor="fileInput" className="file-label">
                        <input type="file" id="fileInput" className="hidden" />
                        <span className="file-icon"><img src={file} alt="File Icon" /></span>
                        <span className="file-name">Choose a file</span>
                    </label>
                    <div className="checkbox">
                        <input type="checkbox" name="terms" id="terms" required />
                        <label htmlFor="terms">I agree with the processing of personal data*</label>
                    </div>
                </div>
                <button className="button-1" type="submit">
                    Submit message
                </button>
            </form>
        </>
    )
}