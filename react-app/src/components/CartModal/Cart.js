import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {

    const items = useSelector((state) => state.cart?.cart);

    const priceValue = (price) => {
        let returnPrice;
        let p = price?.toString().length
        
        if (p === 1 || p === 2) returnPrice = (`$ ${price}.00`)
        if (p === 3) returnPrice = (`$ ${price}0`)
        if (p >= 4) returnPrice = (`$ ${price}`)   
        return returnPrice;
    }

    if (items) {
        return (
            <div className="cart-container">
                <div className="cart-title-text">View Your Cart</div>
                {items?.map((item) => (
                    console.log(item),
                    <div className="cart-item-container">
                        <img src={item.image}/>
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-right-container">
                            <div className="cart-item-price">{priceValue(item.price)}</div>
                            <div className="cart-item-quantity">Quantity: {item.quantity}</div>
                        </div>
                    </div>

                )
                )}
                <button></button>
            </div>
        )
    } else {
        return (
            <div>Your cart is empty!</div>

        )
        
    }
};

export default Cart;