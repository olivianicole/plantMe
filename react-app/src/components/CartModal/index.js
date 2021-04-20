import React, { useState } from "react";
import { ShoppingCartModal } from "../../context/Modal";
import Cart from "./Cart";
import "./Cart.css";
import { addToCart } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";


const CartModal = ({ item }) => {
    const dispatch = useDispatch();
    const [ showModal, setShowModal ] = useState(false);
    const user = useSelector((state) => state?.session?.user?.current_user);
    // console.log("item", item)
    const { name, image, price, quantity, listing_id} = item;

    const itemDetails = {
        user_id: user.id,
        listing_id: listing_id,
        quantity: quantity,
    }

    // console.log("item details", itemDetails)
    return (
        <>
            <button 
            onClick={() => {
                dispatch(addToCart(itemDetails))
                setShowModal(true)
                return
            }}
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


