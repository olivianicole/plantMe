import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import priceConverter from "../../services/priceconverter";
import "./Checkout.css";

const Checkout = () => {
    const items = useSelector((state) => state.cart?.cart);
    const user = useSelector((state) => state?.session?.user?.current_user);

    useEffect(() => {
    if (!items){
        return items;
    }
    }, [items])

    return (
        <>
            <div className="checkout-page-container">
                <div className="checkout-title-text"><i class="fas fa-lock"></i>Secure checkout</div>
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
            </div>
        </>
    )
};

export default Checkout;