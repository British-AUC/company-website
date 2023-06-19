import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin_black.svg";
import facebook from "../assets/facebook_black.svg";
import instagram from "../assets/instagram_black.svg";
import twitter from "../assets/twitter_black.svg";
import FooterLinks from "./FooterLinks";
import footerdata from "../data/footerinfo.js";


export default function Footer(){
    const footerinformation = footerdata.map(item => <FooterLinks key={item.id} {...item}  />)

    return (
        <footer>
            <div className="footer-left">
                <Link to="/">
                    <img src={logo} alt="Logo Icon" />
                </Link>
                <p>
                    Connect with Us for Vital Study Abroad Tips 
                    and Unlock Your Global Potential.
                </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/company/british-auc/" target="_blank">
                        <img src={linkedin} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://web.facebook.com/BritishAUC1/" target="_blank">
                        <img src={facebook} alt="Facebook Icon" />
                    </a>
                    <a href="https://www.instagram.com/britishauc1/" target="_blank">
                        <img src={instagram} alt="Instagram Icon" />
                    </a>
                    <a href="https://twitter.com/britishauc" target="_blank">
                        <img src={twitter} alt="Twitter Icon" />
                    </a>
                </div>
                <p id="copyright1">© 2023. All Rights Reserved. British AUC</p>
            </div>
            <div className="footer-right">
                {footerinformation}
            </div>
            <p id="copyright2">© 2023. All Rights Reserved. British AUC</p>
        </footer>
    )
}