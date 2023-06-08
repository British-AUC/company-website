import React from "react"
import '../styles/App.css'
import heroimage from "../assets/heroimage.webp"
import groupimage from "../assets/groupimage.png"
import file from "../assets/file.svg";
import Service from "../components/Service";
import servicedata from "../data/services";
import Testimonial from "../components/Testimonials";
import Metrics from "../components/Metrics";
import metricsdata from "../data/metrics";
import ContactInfo from "../components/ContactInfo";
import contactdata from "../data/contactinfo";
import Flags from "../components/Flags";
import flagsdata from "../data/flags";

export default function Home(){
    const services = servicedata.map(item => <Service key={item.id} {...item}/>)
    const metrics = metricsdata.map(item => <Metrics key={item.id} {...item}/>)
    const contactinformation = contactdata.map(item => <ContactInfo key={item.id} {...item} />)
    const countryflags = flagsdata.map(item => <Flags key={item.id} {...item} />)

    return (
        <>
            {/* HERO SECTION */}
            <header className="hero">
                <div className="hero-left">
                    <h1>Want to Study <span style={{color:"#005EBD"}}>Abroad?</span></h1>
                    <p>
                        Lets take the stress off you! We will get you into any 
                        university or college around the world.
                    </p>
                    <div className="button-container">
                        <button className="button-1">
                            <a href="#form">Speak to an advisor</a>
                        </button>
                        <button className="button-2">
                            <a href="#service">Learn more</a>
                        </button>
                    </div>
                </div>
                <div className="hero-right">
                    <img src={heroimage} alt="Hero Image" />
                </div>
            </header>

            {/* SECTION ONE - COUNTRY FLAGS */}
            <section className="section-one">
                <p>
                    We’ve helped over 1000 Nigerian students gain university 
                    admission in over 25 countries across the globe.
                </p>
                <div className="flags-block">
                    <div className="flags-container-sub">
                        {countryflags}
                    </div>
                </div>
            </section>

            {/* SECTION TWO */}
            <section className="section-two">
                <h2>About British AUC</h2>
                <div className="section-two-bottom">
                    <div className="section-two-left">
                        <img src={groupimage} alt="Group Image" />
                    </div>
                    <div className="section-two-right">
                        <p>
                            <b>BRITISH AUC</b> is a Free Visa and Admission Application 
                            Centre that support admission and visa application to 
                            universities and countries around the world for WHOLLY 
                            FREE OF CHARGE. 
                        </p>
                        <p>
                            <b>BRITISH AUC</b>  Application Centre is a one-stop shop for 
                            all your study abroad support services. The application 
                            centres have helped thousands of international students 
                            study in universities and colleges in the UK, USA, Canada, 
                            Australia, Ireland, Germany, Turkey, Cyprus, etc.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION THREE */}
            <section className="section-three" id="service">
                <h2>How can we help?</h2>
                {services}
            </section>

            {/* SECTION FOUR */}
            <section className="section-four">
                <h2>Testimonials from happy clients</h2>
                <Testimonial/>
            </section>

            {/* SECTION FIVE */}
            <section className="section-five">
                <h2>Our Success</h2>
                <div className="metrics-container">
                    {metrics}
                </div>
            </section>

            {/* SECTION SIX */}
            <section className="section-six" id="form">
                <h2>Speak to an advisor now</h2>
                <p>
                    Got questions? Leave your details below and a 
                    customer representative will reach out to you 
                    within 24 hours.
                </p>
                <div className="section-six-sub">
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
                        <textarea name="" id="" rows="10" placeholder="Message*" required ></textarea>
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
                </div>
            </section>

            {/* SECTION SEVEN */}
            <section className="section-seven">
                <h3>Join our newsletter</h3>
                <p> 
                    Stay informed and stay ahead. Subscribe 
                    for exclusive study abroad insights, 
                    resources, and exciting opportunities.
                </p>
                <form className="email-container">
                    <input type="email" placeholder="Your Email Address" required />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </>
    )
}