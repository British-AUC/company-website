import React from "react";
import CEO from "../assets/mrcollins.png";
import linkedin from "../assets/testimonials/linkedin_icon.svg";
import { Values1, Values2 } from "../components/Values";
import { data1, data2 } from "../data/valueprops";
import partner1 from "../assets/partners/partner1.svg";
import partner2 from "../assets/partners/partner2.svg";
import partner3 from "../assets/partners/partner3.svg";
import partner4 from "../assets/partners/partner4.svg"
import partner5 from "../assets/partners/partner5.svg"


export default function About(){
    const valuepropositon1 = data1.map(item => <Values1 key={item.id} {...item} />)
    const valuepropositon2 = data2.map(item => <Values2 key={item.id} {...item} />)

    return (
        <>
            {/* SECTION EIGHT */}
            <section className="section-eight">
                <h2>Meet <span style={{color: "#005EBD" }}>British AUC</span></h2>
                <p>
                    BRITISH AUC is a leading organization that offers comprehensive 
                    support for students aspiring to study abroad. Our expert team 
                    assists students throughout the entire process, providing free 
                    visa and admission application services to universities worldwide. 
                    With a proven track record, we have successfully guided thousands of 
                    students to renowned universities and colleges across the globe. 
                </p>
                <p>
                    We offer a one-stop shop, providing up-to-date information on universities,
                    scholarships, accommodations, and pre-departure support. Our personalized 
                    guidance ensures a seamless and stress-free experience. At BRITISH AUC, 
                    we are committed to helping students make informed decisions, unlock their potential,
                    and embark on a transformative journey towards a brighter future.
                </p>
            </section>

            {/* SECTION NINE */}
            <section className="section-nine">
                <h2>A word from our <span style={{color: "#005EBD" }}>CEO</span></h2>
                <div className="section-nine-sub">
                    <div className="section-nine-left">
                        <img src={CEO} alt="Mr Collins" />
                        <em><img src={linkedin} alt="Linkedin Icon" /> Dr. Collins Onyeaji</em>
                        <strong>Chief Executive Officer - British AUC</strong>
                    </div>
                    <div className="section-nine-right">
                        <p>
                            “  Dear prospective students, Welcome to BRITISH AUC, where your dreams 
                            of studying abroad become reality. As the CEO, I am honored to guide you 
                            on this transformative journey. We are your trusted partner, offering free 
                            visa and admission application services to universities worldwide.
                        </p>
                        <p>
                            With a proven track record of success, we have helped thousands of students like 
                            you fulfill their aspirations at renowned universities and colleges globally. 
                            Our comprehensive support makes us your one-stop shop for all study abroad needs
                        </p>
                        <p>
                            Our dedicated team of experts ensures a seamless and stress-free experience. 
                            We provide personalized assistance tailored to your unique aspirations. 
                            And the best part? Our services are completely free of charge. 
                            We provide up-to-date information on universities, scholarships, accommodations, 
                            and pre-departure support. Equipping you with the knowledge and resources needed 
                            to make informed decisions is our priority.
                        </p>
                        <p>
                            Join the successful students who trust BRITISH AUC to guide them towards their dreams. 
                            Let us be your guiding light. Contact us today to embark on this exciting journey towards 
                            a brighter future. “
                        </p>
                        <p>Warm regards.</p>
                    </div>
                </div>
            </section>

            {/* SECTION TEN */}
            <section className="section-ten">
                <h2>Why choose our Application Center</h2>
                <div className="section-ten-sub">
                    <div className="sub">
                        {valuepropositon1}
                    </div>
                    <div className="sub">
                        {valuepropositon2}
                    </div>
                </div>
            </section>

            {/* SECTION ELEVEN */}
            <section className="section-eleven" >
                <h2>Our Partners</h2>
                <div className="images-container">
                    <img src={partner1} alt="Partners Icon" />
                    <img src={partner2} alt="Partners Icon" />
                    <img src={partner3} alt="Partners Icon" />
                    <img src={partner4} alt="Partners Icon" />
                    <img src={partner5} alt="Partners Icon" />
                </div>
            </section>

            {/* SECTION TWELVE */}
            <section className="section-twelve">
                <h2>Lets Get You an Admission Today</h2>
                <button>Get in touch</button>
            </section>
        </>
    )
}