import PropTypes from "prop-types";
import React from "react";
// import { IconComponentNode } from "./IconComponentNode";
import "./FooterSection.css";
// import line from ".//public/line3.svg";
import { Link } from "react-router-dom";

export const FooterSection = ({
    facebook = "facebook-1.svg",
    instagram = "instagram-1.svg",
    twitter = "twitter-1.svg",
    linkedin = "linkedin-1.svg",
    // text = "+908 89097 890",
    // icon = <IconComponentNode className="brand-logo" />,
    googlePageSpeed = "google-page-speed-1.png",
    text1 = "© 2023 Copyright by Agency Solutions. All rights reserved.",
    line = "line-3.svg",
}) => {
    return (
        <div className="footer-section">
            <div className="overlap-group">
                <div className="group">
                    <div className="group-wrapper">
                        <div className="div">
                            <p className="text-wrapper"> A SaaS based low code ETL pipeline for creating high-quality vector
                                embedding of unstructured data to build Generative AI</p>
                            <p className="about-us-services">
                                <Link to="/AboutUs">About Us</Link> <br />
                                <Link to="/Pricing">Pricing</Link> <br />
                                <Link to="https://docs.vectrflow.com/" target="_blank">Documentation</Link> <br />
                                <Link to="/contact">Contact Us</Link> <br />
                            </p>
                            <div className="group-2">
                                <div className="facebook-wrapper">
                                    <img className="facebook" alt="Facebook" src={facebook} />
                                </div>
                                <div className="instagram-wrapper">
                                    <img className="instagram" alt="Instagram" src={instagram} />
                                </div>
                                <div className="twitter-wrapper">
                                    <img className="twitter" alt="Twitter" src={twitter} />
                                </div>
                                <div className="linkedin-wrapper">
                                    <img className="linkedin" alt="Linkedin" src={linkedin} />
                                </div>
                            </div>
                            <div className="text-wrapper-2">Links</div>
                            <div className="group-3">
                                <p className="p">gs@vectrflow.com</p>
                                {/* <div className="element">{text}</div> */}
                                <div className="text-wrapper-3">Contact us</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {icon} */}
                <img className="google-page-speed" alt="Google page speed" src={googlePageSpeed} />
            </div>
            <p className="element-copyright-by">{text1}</p>
            {/* <img className="line" alt="line" src={line} /> */}
        </div>
    );
};

FooterSection.propTypes = {
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    text: PropTypes.string,
    googlePageSpeed: PropTypes.string,
    text1: PropTypes.string,
    line: PropTypes.string,
};
