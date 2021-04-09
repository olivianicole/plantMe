import React, { useEffect, useState } from "react";
import { ShoppingCartModal } from "../../context/Modal";
import Cart from "./Cart";
import "./Cart.css";
// import addToCart from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";


const CartModal = ({ item }) => {
    const dispatch = useDispatch();
    const [ showModal, setShowModal ] = useState(false);
   
    return (
        <>
            <button 
            onClick={() => setShowModal(true)}
            className="add-to-cart-button">
                Add to cart
            </button>
            { showModal && (
            <ShoppingCartModal onClose={() => setShowModal(false)}>
                <Cart setShowModal={setShowModal} />
            </ShoppingCartModal>
            )}
        </>
    )
};

export default CartModal;