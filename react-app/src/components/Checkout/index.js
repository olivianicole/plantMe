import React, { useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import priceConverter from "../../services/priceconverter";
import { getCart } from "../../store/cart";import { NavLink } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart?.cart?.your_cart);
    const user = useSelector((state) => state?.session?.user?.current_user);
    // console.log(items)
    useEffect(() => {
    if (!items){
        dispatch(getCart())
    }
    }, [items])
    
    // const onPurchase = (e) => {
    //     e.preventDefault();
        // if (items) {
        //     items.map((item) => {
        //         const itemDetails = {
        //             user_id: user.id,
        //             shop_id: item.shop_id,
        //             quantity: item.quantity,
        //         };
        //         dispatch(purchase(itemDetails));
        //         })
        //         return <Redirect to="/account" />;
        //     } else {
        //         console.log("error! no items!")
        //     }
    // }

    return (
        <>
            <div className="checkout-page-container">
                <div className="checkout-title-text"><i className="fas fa-lock"></i>Secure checkout</div>
                {items?.map((item) => (
                    console.log(item),
                <div className="checkout-item-container" key={item.listing_id}>
                    <img src={item.listing.image_1}/>
                    <div className="checkout-item-name">{item.listing.name}</div>
                    <div className="checkout-item-right-container">
                        <div className="checkout-item-price">{priceConverter(item.listing.price)}</div>
                        <div className="checkout-item-quantity">Quantity: {item.quantity}</div>
                    </div>
                </div>
                ))}
                <div className="button-container">
                    <NavLink to="/account" className="checkout-complete-button">Complete Purchase</NavLink>
                </div>
            </div>
        </>
    )
};

export default Checkout;