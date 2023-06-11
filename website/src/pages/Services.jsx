import React from "react"
import Service from "../components/Service";
import servicedata from "../data/services";

export default function Services(){
    const services = servicedata.map(item => <Service key={item.id} {...item}/>)

    return (
        <>
            {/* SECTION THREE [IMPORTED CLASS]*/}
            <div className="services-section">
                <section className="section-three">
                    <h2>Our Services</h2>
                    <p id="service-p">
                        At BRITISH AUC, we offer a range of exceptional services tailored to 
                        meet your study abroad needs. Our expert team provides free visa and 
                        admission application support to universities worldwide. We guide you 
                        through the intricate process, ensuring a seamless experience. Additionally, 
                        we offer up-to-date information on universities, scholarships, accommodations, 
                        and pre-departure assistance. Our personalized approach and proven track record 
                        empower you to make informed decisions and embark on an exciting journey towards 
                        academic success and personal growth. Trust BRITISH AUC to make your study abroad dreams a reality.
                    </p>
                    {services}
                </section>
            </div>
        </>
    )
}