import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {

    const items = useSelector((state) => state.cart?.cart);

    console.log(items)
    if (items) {
        return (
            <div className="cart-container">
                <div>In Your Cart</div>
                {items?.map((item) => (
                    <div>
                        <div>{item.name}</div>
                        <img src={item.image_1}/>
                    </div>

                )
                )}
            </div>
        )
    } else {
        return (
            <div>Your cart is empty!</div>

        )
        
    }
};

export default Cart;