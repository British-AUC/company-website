import React from "react"
import '../styles/App.css'
import heroimage from "../assets/heroimage.webp"
import groupimage from "../assets/groupimage.png"
import ukflag from "../assets/flags/ukflag.svg"
import usflag from "../assets/flags/usflag.svg"
import canadaflag from "../assets/flags/canadaflag.svg"
import irelandflag from "../assets/flags/irelandflag.svg"
import scotlandflag from "../assets/flags/scotlandflag.svg"
import australiaflag from "../assets/flags/australiaflag.svg"
import newzealandflag from "../assets/flags/newzealandflag.svg"
import germanyflag from "../assets/flags/germanyflag.svg"
import turkeyflag from "../assets/flags/turkeyflag.svg"
import cyprusflag from "../assets/flags/cyprusflag.svg"
import polandflag from "../assets/flags/polandflag.svg"
// import ukraineflag from "../assets/flags/ukraineflag.svg"
import file from "../assets/file.svg"
import Service from "../components/Service"
import servicedata from "../data/services";
import Testimonial from "../components/Testimonials"
import Metrics from "../components/Metrics"
import metricsdata from "../data/metrics"
import ContactInfo from "../components/ContactInfo"
import contactdata from "../data/contactinfo"

export default function Home(){
    const services = servicedata.map(item => <Service key={item.id} {...item}/>)
    const metrics = metricsdata.map(item => <Metrics key={item.id} {...item}/>)
    const contactinformation = contactdata.map(item => <ContactInfo key={item.id} {...item} />)

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
                            Speak to an advisor
                        </button>
                        <button className="button-2">
                            Learn more
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
                <div className="flags-container">
                    <img src={ukflag} alt="UK Flag" />
                    <img src={usflag} alt="US Flag" />
                    <img src={canadaflag} alt="Canada Flag" />
                    <img src={irelandflag} alt="Ireland Flag" />
                    <img src={scotlandflag} alt="Scotland Flag" />
                    <img src={australiaflag} alt="Australia Flag" />
                    <img src={newzealandflag} alt="New Zealand Flag" />
                    <img src={germanyflag} alt="Germany Flag" />
                    <img src={turkeyflag} alt="Turkey Flag" />
                    <img src={cyprusflag} alt="Cyprus Flag" />
                    <img src={polandflag} alt="poland Flag" />
                    {/* <img src={ukraineflag} alt="Ukraine Flag" /> */}
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
            <section className="section-three">
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
            <section className="section-six">
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
                            <input type="text" name="" id="" placeholder="First Name*" />
                            <input type="text" name="" id="" placeholder="Last Name*"/>
                        </div>
                        <div className="inputs">
                            <input type="email" name="" id="" placeholder="Email Address*" />
                            <input type="tel" name="" id="" placeholder="Phone Number*"/>
                        </div>
                        <textarea name="" id="" rows="10" placeholder="Message*"></textarea>
                        <div className="inputs2">
                            <label for="fileInput" class="file-label">
                                <input type="file" id="fileInput" class="hidden" />
                                <span class="file-icon"><img src={file} alt="File Icon" /></span>
                                <span class="file-name">Choose a file</span>
                            </label>
                            <div className="checkbox">
                                <input type="checkbox" name="terms" id="terms" />
                                <label for="terms">I agree with the processing of personal data *</label>
                            </div>
                        </div>
                        <button className="button-1">
                            Submit message
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}