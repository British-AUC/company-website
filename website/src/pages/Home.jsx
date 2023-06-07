import React from "react"
import '../styles/App.css'
import heroimage from "../assets/heroimage.webp"
import groupimage from "../assets/groupimage.png"
import ukflag from "../assets/ukflag.svg"
import usflag from "../assets/usflag.svg"
import canadaflag from "../assets/canadaflag.svg"
import irelandflag from "../assets/irelandflag.svg"
import scotlandflag from "../assets/scotlandflag.svg"
import australiaflag from "../assets/australiaflag.svg"
import newzealandflag from "../assets/newzealandflag.svg"
import germanyflag from "../assets/germanyflag.svg"
import turkeyflag from "../assets/turkeyflag.svg"
import cyprusflag from "../assets/cyprusflag.svg"
import polandflag from "../assets/polandflag.svg"
// import ukraineflag from "../assets/ukraineflag.svg"
import Service from "../components/Service"
import servicedata from "../data/services";

export default function Home(){
    const services = servicedata.map(item => (<Service key={item.id} {...item}/>))

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

            {/* SECTION TWO*/}
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

            {/* SECTION THREE*/}
            <section className="section-three">
                <h2>How can we help?</h2>
                {services}
            </section>
        </>
    )
}