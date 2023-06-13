import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import file from "../assets/file.svg";
import ContactInfo from "../components/ContactInfo";
import contactdata from "../data/contactinfo";

export default function ContactInfoForm(){
    const contactinformation = contactdata.map(item => <ContactInfo key={item.id} {...item} />)

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        telephone: "",
        courseStudy: "",
        countryStudy: "",
        universityInterest: "",
        estimatedBudget: "",
        file: "",
        terms: "",
        message: "",
    })

    const navigate = useNavigate();
    
    function handleChange(event) {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    async function submitFormData(event) {
        event.preventDefault();

        try {
            const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
            service_id: "service_ms2fofk",
            template_id: "template_dci5ahb",
            user_id: "MLH1eO9nBHifSCH03",
            template_params: {
                from_firstname: formData.firstName,
                from_lastname: formData.lastName,
                from_email: formData.emailAddress,
                from_telephone: formData.telephone,
                from_course_study: formData.courseStudy,
                from_country_study: formData.countryStudy,
                from_university_interest: formData.universityInterest,
                from_estimated_budget: formData.estimatedBudget,
                from_file: formData.file,
                from_terms: formData.terms,
                message: formData.message,
            },
        });

        if (response.status === 200) {
            navigate("/");
        }   else {
                alert("Failed to send email. Please try again later.");
        }
        }   catch (error) {
                alert("Failed to send email. Please try again later.");
        }
    }

    return (
        <>
            <div className="section-six-left">
                {contactinformation}
            </div>
            <form className="section-six-right" onSubmit={submitFormData}>
                <div className="inputs">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name*"
                        value={formData.lastName}
                        onChange={handleChange}  
                        required 
                    />
                </div>
                <div className="inputs">
                    <input 
                        type="email" 
                        name="emailAddress" 
                        placeholder="Email Address*"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        type="tel" 
                        name="telephone" 
                        placeholder="Phone Number*"
                        value={formData.telephone}
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        name="courseStudy" 
                        placeholder="Intended Course of Study" 
                        value={formData.courseStudy}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        name="countryStudy" 
                        placeholder="Intended Country of Study" 
                        value={formData.countryStudy}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        name="universityInterest" 
                        placeholder="University of Interest" 
                        value={formData.universityInterest}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        name="estimatedBudget" 
                        placeholder="Your Estimated Budget" 
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                    />
                </div>
                <textarea 
                    name="message" 
                    rows="5" 
                    placeholder="Message*" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                >
                </textarea>
                <div className="inputs2">
                    <label htmlFor="fileInput" className="file-label">
                        <input
                            name="file" 
                            type="file" 
                            id="fileInput" 
                            className="hidden" 
                            value={formData.file}
                            onChange={handleChange}
                        />
                        <span className="file-icon"><img src={file} alt="File Icon" /></span>
                        <span className="file-name">Choose a file</span>
                    </label>
                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            name="terms" 
                            id="terms" 
                            value={formData.terms}
                            onChange={handleChange}
                            required 
                        />
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