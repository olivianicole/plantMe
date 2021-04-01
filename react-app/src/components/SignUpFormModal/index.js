import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import { Modal } from "../../context/Modal";
import "./SignUp.css";

const SignUpFormModal = ({ authenticated }) => {
    const [ showModal, setShowModal ] = useState(false);
    
    return (
        <>
            <button 
            onClick={() => setShowModal(true)}
            className="signup-form-modal-button">
                Register
                { showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <SignUpForm authenticated={authenticated} setShowModal={setShowModal} />
                        </Modal>
                    )}
            </button>
        </>
    )
};

export default SignUpFormModal;