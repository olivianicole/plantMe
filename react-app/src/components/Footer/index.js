import React from "react";
// import headshot from "./headshot.jpg"
import "./Footer.css";

const Footer = ({ authenticated, setAuthenticated }) => {
    return (
        <>
            <div className="footer-component">
                <div className="footer-text">
                    Developed by: Olivia Young
                    {/* <img src={headshot}/> */}
                </div>
                <div className="footer-links">
                    <a href="https://github.com/olivianicole">
                        <i className="fab fa-github" />
                    </a>
                    |
                    <a href="https://www.linkedin.com/in/olivianicoleyoung/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    |
                    <a href="https://angel.co/u/olivia-young-10">
                        <i className="fab fa-angellist"></i>
                    </a>
                </div>
            </div>
        </>
    )
};

export default Footer;