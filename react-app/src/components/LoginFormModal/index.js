import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";
import "./LoginForm.css";

const LoginFormModal = ({ authenticated, setAuthenticated }) => {
    const [ showModal, setShowModal ] = useState(false);
    
    return (
        <>
            <button 
            onClick={() => setShowModal(true)}
            className="login-form-modal-button">
                Log In
            </button>
            { showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <LoginForm authenticated={authenticated} setShowModal={setShowModal} setAuthenticated={setAuthenticated}/>
            </Modal>
            )}
        </>
    )
};

export default LoginFormModal;