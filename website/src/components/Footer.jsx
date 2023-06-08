import React from "react";
import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin_black.svg";
import facebook from "../assets/facebook_black.svg";
import instagram from "../assets/instagram_black.svg";
import twitter from "../assets/twitter_black.svg";
import youtube from "../assets/youtube_black.svg";
import FooterLinks from "./FooterLinks";
import footerdata from "../data/footerinfo.js";


export default function Footer(){
    const footerinformation = footerdata.map(item => <FooterLinks key={item.id} {...item}  />)

    return (
        <footer>
            <div className="footer-left">
                <img src={logo} alt="Logo Icon" />
                <p>
                    Connect with Us for Vital Study Abroad Tips 
                    and Unlock Your Global Potential.
                </p>
                <div className="social-icons">
                    <img src={linkedin} alt="LinkedIn Icon" />
                    <img src={facebook} alt="Facebook Icon" />
                    <img src={instagram} alt="Instagram Icon" />
                    <img src={twitter} alt="Twitter Icon" />
                    <img src={youtube} alt="Youtube Icon" />
                </div>
                <p>© 2023. All Rights Reserved. British AUC</p>
            </div>
            <div className="footer-right">
                {footerinformation}
            </div>
        </footer>
    )
}