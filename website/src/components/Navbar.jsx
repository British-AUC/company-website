import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom"
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import logo from "../assets/logo.svg";
import bar from "../assets/bar.svg";
import cancel from "../assets/cancel.svg";

export default function Navbar(){
    const location = useLocation();

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <nav>
            <div className="nav-top">
                <p><img src={phone} alt="Phone Icon" /> +234 (0) 903 394 2463</p>
                <p><img src={email} alt="Email Icon" /> contact@britishauc.com</p>
            </div>

            <div className="nav-bottom">
                <div className="nav-bottom-left">
                    <Link to="/">
                        <img src={logo} alt="Logo Icon" />
                    </Link>
                </div>
                
                <div className={`nav-bottom-right ${isMobileNavOpen ? "open" : ""}`}>
                    <div className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className={location.pathname === "/about" ? "active" : ""}>
                        <Link to="/about">About us</Link>
                    </div>
                    <div className={location.pathname === "/services" ? "active" : ""}>
                        <Link to="/services">Services</Link>
                    </div>
                    <div className={location.pathname === "/events" ? "active" : ""}>
                        <Link to="/events">Events</Link>
                    </div>
                    <div className={location.pathname === "/blog" ? "active" : ""}>
                        <Link to="/blog">Blog</Link>
                    </div>
                </div>

                <div className="mobile-nav-toggle" onClick={toggleMobileNav}>
                    <img src={isMobileNavOpen ? cancel : bar} alt="Mobile Nav Bar" />
                </div>
            </div>
        </nav>
    )
}