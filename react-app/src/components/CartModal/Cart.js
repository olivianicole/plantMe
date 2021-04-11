import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import priceConverter from "../../services/priceconverter";
import "./Cart.css";

const Cart = () => {
    const items = useSelector((state) => state.cart?.cart);

    useEffect(() => {
        if (!items){
            return items;
        }
    }, [items])
 

    if (items) {
        return (
            <div className="cart-container">
                <div className="cart-title-text">View Your Cart</div>
                {items?.map((item) => (
                    <div className="cart-item-container" key={item.name}>
                        <img src={item.image}/>
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-right-container">
                            <div className="cart-item-price">{priceConverter(item.price)}</div>
                            <div className="cart-item-quantity">Quantity: {item.quantity}</div>
                        </div>
                    </div>

                )
                )}
                <NavLink to="/checkout" className="cart-checkout-button">Proceed to checkout</NavLink>
            </div>
        )
    } else {
        return (
            <div>Your cart is empty!</div>

        )
        
    }
};

export default Cart;