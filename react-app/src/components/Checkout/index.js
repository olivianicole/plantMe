import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import priceConverter from "../../services/priceconverter";
import { getCart, removeFromCart, purchase } from "../../store/cart";import { NavLink } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
    const dispatch = useDispatch();
    const [purchased, setPurchased] = useState(false);
    const items = useSelector((state) => state.cart?.cart?.your_cart);
    const user = useSelector((state) => state?.session?.user?.current_user);
    console.log(items)
    useEffect(() => {
    if (!items){
        dispatch(getCart())
    }
    }, [items, dispatch])


    const handleRemove = (itemId, e) => {
        e.preventDefault();
        dispatch(removeFromCart(itemId))
    };
    
    const onPurchase = (e) => {
        e.preventDefault();
        if (items) {
            items.map((item) => {
                const itemDetails = {
                    user_id: user.id,
                    listing_id: item.listing_id,
                    quantity: item.quantity,
                };
                dispatch(purchase(itemDetails));

                dispatch(removeFromCart(item.id))
                })
                setPurchased(true);
            } else {
                console.log("error! no items!")
            }
    }

    if (purchased === true) {
        return <Redirect to="/account"/>
    }
    return (
        <>
            <div className="checkout-page-container">
                <div className="checkout-title-text"><i className="fas fa-lock"></i>Secure checkout</div>
                {items?.map((item) => (
                    console.log(item),
                <div className="checkout-item-container" key={item.id}>
                    <img src={item.listing.image_1}/>
                    <div className="checkout-item-name">{item.listing.name}</div>
                    <div className="checkout-item-right-container">
                        <div className="checkout-item-price">{priceConverter(item.listing.price)}</div>
                        <div className="checkout-item-quantity">Quantity: {item.quantity}</div>
                        <button className="checkout-delete-btn" onClick={(e) => handleRemove(item.id, e)}><i className="far fa-trash-alt"></i></button>
                    </div>
                </div>
                ))}
                <div className="button-container">
                    <button onClick={(e) => onPurchase(e)} className="checkout-complete-button">Complete Purchase</button>
                </div>
            </div>
        </>
    )
};

export default Checkout;