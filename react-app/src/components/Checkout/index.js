import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import priceConverter from "../../services/priceconverter";
import { purchase } from "../../store/cart";
import "./Checkout.css";

const Checkout = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart?.cart);
    const user = useSelector((state) => state?.session?.user?.current_user);

    useEffect(() => {
    if (!items){
        return items;
    }
    }, [items])
    
    const onPurchase = (e) => {
        e.preventDefault();
        if (items) {
            items.map((item) => {
                const itemDetails = {
                    user_id: user.id,
                    shop_id: item.shop_id,
                    quantity: item.quantity,
                };
                dispatch(purchase(itemDetails));
                })
                return <Redirect to="/account" />;
            } else {
                console.log("error! no items!")
            }
        
    }

    return (
        <>
            <div className="checkout-page-container">
                <div className="checkout-title-text"><i className="fas fa-lock"></i>Secure checkout</div>
                {items?.map((item) => (
                <div className="checkout-item-container" key={item.name}>
                    <img src={item.image}/>
                    <div className="checkout-item-name">{item.name}</div>
                    <div className="checkout-item-right-container">
                        <div className="checkout-item-price">{priceConverter(item.price)}</div>
                        <div className="checkout-item-quantity">Quantity: {item.quantity}</div>
                    </div>
                </div>
                ))}
                <div className="button-container">
                    <button onClick={onPurchase} className="checkout-complete-button">Complete Purchase</button>
                </div>
            </div>
        </>
    )
};

export default Checkout;