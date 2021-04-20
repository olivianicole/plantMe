import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCart } from "../../store/cart";
import priceConverter from "../../services/priceconverter";
import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart?.cart);
    console.log("items", items)
    useEffect(() => {
        if (!items){
            dispatch(getCart())
        }
    }, [items, dispatch])
 

    if (items) {
        return (
            <div className="cart-container">
                <div className="cart-title-text">View Your Cart</div>
                {/* {items?.map((item) => (
                    <div className="cart-item-container" key={item.name}>
                        <img src={item.image}/>
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-right-container">
                            <div className="cart-item-price">{priceConverter(item.price)}</div>
                            <div className="cart-item-quantity">Quantity: {item.quantity}</div>
                        </div>
                    </div>

                )
                )} */}
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