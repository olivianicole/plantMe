import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCart, removeFromCart } from "../../store/cart";
import priceConverter from "../../services/priceconverter";
import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart?.cart?.your_cart);
    // console.log("items", items)
    useEffect(() => {
        if (!items){
            dispatch(getCart())
        }
    }, [items, dispatch])

    const handleRemove = (itemId, e) => {
            e.preventDefault();
            dispatch(removeFromCart(itemId))
        };
    

    if (items?.length) {
        return (
            <div className="cart-container">
                <div className="cart-title-text">View Your Cart</div>
                {items?.map((item) => (
                    <div className="cart-item-container" key={item.id}>
                        <img src={item.listing.image_1}/>
                        <div className="cart-item-name">{item.listing.name}</div>
                        <div className="cart-item-right-container">
                            <div className="cart-item-price">{priceConverter(item.listing.price)}</div>
                            <div className="cart-item-quantity">Quantity: {item.quantity}</div>
                            <button className="cart-delete-btn" onClick={(e) => handleRemove(item.id, e)}><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                )
                )}
                <NavLink to="/checkout" className="cart-checkout-button">Proceed to checkout</NavLink>
            </div>
        )
    } else {
        return (
            <div className="cart-title-text">Your cart is empty!</div>

        )
        
    }
};

export default Cart;