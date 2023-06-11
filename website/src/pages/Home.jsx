import React from "react"
import heroimage from "../assets/heroimage.webp"
import groupimage from "../assets/groupimage.png"
import Service from "../components/Service";
import servicedata from "../data/services";
import Testimonial from "../components/Testimonials";
import Metrics from "../components/Metrics";
import metricsdata from "../data/metrics";
import Flags from "../components/Flags";
import flagsdata from "../data/flags";
import ContactInfoForm from "../components/Contact_Info_Form";

export default function Home(){
    const services = servicedata.map(item => <Service key={item.id} {...item}/>)
    const metrics = metricsdata.map(item => <Metrics key={item.id} {...item}/>)
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
                    <ContactInfoForm/>
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