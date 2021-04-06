import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings } from "../../store/listings";
import { NavLink } from "react-router-dom";
import Listing from "../Listing";
import "./Home.css";

const Home = ({ authenticated }) => {
    const dispatch = useDispatch();
    const listings = useSelector((state) => {
        return state.listings.allListings?.all_listings;
    })
    const user = useSelector((state) => state?.session?.user?.current_user);
    

    useEffect(() => {
        if (!listings){
            dispatch(getListings());
        }
    }, [dispatch, listings])

    let userInfo;

    if (user.shop) {
        userInfo = (
            <div className="something">
                <NavLink className="home-page-account-link" to="/account">
                    <div className="home-page-logo-img">
                        <img src={user.shop.shop_logo} alt="Your Shop's Logo"/>
                    </div>
                    <div>View Your Account Details </div>
                </NavLink>
            </div>
        )
    } else {
        userInfo = (
            <div>
                <NavLink className="home-page-account-link" to="/account">
                    <i class="fas fa-store"></i>
                    <div className="home-page-account-link-text">Looking to Open a Shop?</div>
                </NavLink>
            </div>
        )
    }
    return (
        <>
            <div className="home-page-container">
                <div className="home-page-welcome-container">
                {`Welcome Back, ${user.first_name}!`}
                
                    {userInfo}
                </div>
                <div>
                    {listings?.map((listing) => <Listing key={listing.id} listing={listing} /> )}
                </div>
            </div>
        </>
    )
};

export default Home;