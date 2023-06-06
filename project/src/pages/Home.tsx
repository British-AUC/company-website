import React from "react"
import '../styles/App.css'
import heroimage from "../assets/heroimage.webp"

export default function Home(){
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

            </section>
        </>
    )
}