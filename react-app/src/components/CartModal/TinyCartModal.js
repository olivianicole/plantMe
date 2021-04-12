import React, { useEffect, useState } from "react";
import { ShoppingCartModal } from "../../context/Modal";
import Cart from "./Cart";
import "./Cart.css";

const TinyCartModal = () => {
    const [ showModal, setShowModal ] = useState(false);
    return (
        <>
            <button 
            onClick={() => setShowModal(true)}
            className="tiny-cart-button">
            <i className="fas fa-shopping-cart"/>
            </button>
            { showModal && (
            <ShoppingCartModal onClose={() => setShowModal(false)}>
                <Cart setShowModal={setShowModal} />
            </ShoppingCartModal>
            )}
        </>
    )
};

export default TinyCartModal;