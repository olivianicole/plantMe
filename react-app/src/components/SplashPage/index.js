import React from "react";
import { Redirect } from "react-router-dom";
import "./SplashPage.css"

const SplashPage = ({authenticated}) => {
   
    if (authenticated) {
        return <Redirect to="/home" />
    }
    return (
        <>
        <div className="splash-page-container">
            <div className="splash-title-circle">
                <p className="splash-title-text">plantMe</p>
                <div className="splash-button-container">
                    <button className="splash-register-button">register</button>
                    <button className="splash-login-button">login</button>
                </div>
                <div className="splash-about-text">
                    <p></p>
                </div>
                </div>
        </div>
        </>
    )
}

export default SplashPage;