import React from "react";
import { Redirect } from "react-router-dom";
import "./SplashPage.css"
import LoginFormModal from "../LoginFormModal";


const SplashPage = ({ authenticated }) => {
    console.log("on splash")

    if (authenticated){
        return <Redirect to="/home" />
    }
    return (
        <>
            <div className="splash-page-container">
                <div className="splash-title-circle">
                    <p className="splash-title-text">plantMe</p>
                    <div className="splash-modal-container">
                        <div className="splash-register-modal">register</div>
                        <div className="splash-login-modal">log in
                            {/* <LoginFormModal authenticated={authenticated} /> */}
                        </div>
                    </div>
                    <div className="splash-about-text">
                        <p></p>
                    </div>
                    </div>
            </div>
        </>
    )
};

export default SplashPage;