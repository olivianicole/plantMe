import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import Cart from "./Cart";
import "./Cart.css";

const CartModal = ({item, added, setAdded}) => {
    const [ showModal, setShowModal ] = useState(false);

     const addToCart = () => {
        if(added){
            added.push(item);
        } else {
            setAdded([item])
        }
        setShowModal(true);
    };

    return (
        <>
            <button 
            onClick={addToCart}
            className="add-to-cart-button">
                Add to cart
            </button>
            { showModal && (
            <Modal style={{"zIndex": 50}}onClose={() => setShowModal(false)}>
                <Cart setShowModal={setShowModal} />
            </Modal>
            )}
        </>
    )
};

export default CartModal;