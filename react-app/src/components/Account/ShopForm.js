import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import createShop from "../../store/shop";
import "./Account.css";

const ShopForm = () => {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [shop_logo, setShopLogo] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = ("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const updateShopLogo = () => {

    }

    const openShop = () => {
        const submission = {
            name,
            owner_id: user.id,
            description,
            city,
            state,
            country,
        };

        dispatch(createShop(submission));
        window.location.reload();
        return history.push("/account");
    }

    return (
        <div className="shop-form-container">
            <div className="shop-form-title">
                <p>Want to start selling your plants?</p>
            </div>
            <div className="shop-form-shop-logo">
                <input 
                className="shop-form-shop-logo"
                type="file"
                accept='image/*'
                placeholder="Shop Logo"
                value={shop_logo}
                onChange={(e) => updateShopLogo(e)}
                />
            </div>
            <div className="shop-form-name">
                <input 
                className="shop-form-name-input"
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Shop's Name"
                value={name} />
            </div>
            <div className="shop-form-description">
                <textarea
                className="shop-form-description-textarea"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your shop!"
                value={description} />
            </div>
            <div className="shop-form-location-text">
                <p>Where's your shop located?</p>
                <p>This helps customers know when to expect the arrival of their plant!</p>
            </div>
            <div className="shop-form-city">
                <input 
                className="shop-form-city-input"
                name="city"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                value={city} />
            </div>
            <div className="shop-form-state">
                <input 
                className="shop-form-state-input"
                name="state"
                type="text"
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
                value={state} />
            </div>
            <div className="shop-form-country">
                <input 
                className="shop-form-country-input"
                name="country"
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                value={country} />
            </div>
            <button onClick={(e) => openShop(e)} className="shop-form-submit">Open Shop!</button>
        </div>
    )
};

export default ShopForm;