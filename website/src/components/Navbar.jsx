import React from "react";
import { Link, useLocation } from "react-router-dom"
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import logo from "../assets/logo.svg";

export default function Navbar(){
    const location = useLocation();

    return (
        <nav>
            <div className="nav-top">
                <p><img src={phone} alt="Phone Icon" /> +234 (0) 805 900 0097</p>
                <p><img src={email} alt="Email Icon" /> support@britishauc.com</p>
            </div>

            <div className="nav-bottom">
                <div className="nav-bottom-left">
                    <img src={logo} alt="Logo Icon" />
                </div>
                <div className="nav-bottom-right">
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
            </div>
        </nav>
    )
}