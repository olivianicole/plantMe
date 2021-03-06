import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import { Modal } from "../../context/Modal";
import "./SignUp.css";

const SignUpFormModal = ({ authenticated, setAuthenticated }) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
            <button 
            onClick={() => setShowModal(true)}
            className="signup-form-modal-button"
            >
            Register
            </button>
            { showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <SignUpForm authenticated={authenticated} setShowModal={setShowModal} setAuthenticated={setAuthenticated}/>
            </Modal>
            )}
        </>
    )
};

export default SignUpFormModal;