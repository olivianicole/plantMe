import React from "react";
import { Redirect } from "react-router-dom";
import "./SplashPage.css"
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";


const SplashPage = ({ authenticated, setAuthenticated }) => {

    if (authenticated){
        return <Redirect to="/home" />
    }
    return (
        <>
            <div className="splash-page-container">
                <div className="splash-title-circle">
                    <div className="splash-title-inner-circle">
                        <p className="splash-title-text">plantMe</p>
                        <div className="splash-modal-container">
                            <div className="splash-register-modal">
                                <SignUpFormModal  authenticated={authenticated} setAuthenticated={setAuthenticated} />
                            </div>
                            <div className="splash-login-modal">
                                <LoginFormModal authenticated={authenticated} setAuthenticated={setAuthenticated}/>
                            </div>
                        </div>
                        <div className="splash-about-text">
                            <p>where people come together to buy and sell unique and beautiful greenery  </p>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
};

export default SplashPage;