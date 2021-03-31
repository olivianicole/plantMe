import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";

const LoginFormModal = ({ authenticated }) => {
    const [ showModal, setShowModal ] = useState(false);
    
    return (
        <>
            <button onClick={setShowModal(true)}>
                log in
                { showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginForm authenticated={authenticated} setShowModal={setShowModal} />
                        </Modal>
                    )}
            </button>
        </>
    )
};

export default LoginFormModal;