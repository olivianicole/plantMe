import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings } from "../../store/listings";
import { NavLink } from "react-router-dom";
import Listing from "../Listing";
import "./Home.css";

const Home = ({ authenticated }) => {
    const dispatch = useDispatch();
    const listings = useSelector((state) => state.listings.allListings?.all_listings);
    const user = useSelector((state) => state?.session?.user?.current_user);
    const suggestedListings = useSelector((state) => state.listings.allListings?.suggested_listings);

    useEffect(() => {
        if (!listings) dispatch(getListings());
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
                <div>
                    <div>
                        {`Welcome Back, ${user.first_name}!`}
                    </div>
                    {userInfo}
                </div>
                <div className="home-page-suggested-listings">
                    <div className="suggested-text-bold">Suggested Listings <p className="suggested-text-light">Based on what others are loving lately</p></div>
                    <div className="suggested-listing-container">
                        {suggestedListings?.map((listing) =>  {
                                return (
                                    <div className="suggested-listing-individual-container">
                                        <img src={listing.image_1} alt={listing.description} /> 
                                        <div className="suggested-listing-text">{}</div>
                                    </div>
                                )
                        }
                        )}
                    </div>
                </div>
                </div>
                <div>
                    {listings?.map((listing) => <Listing key={listing.id} listing={listing} /> )}
                </div>
            </div>
        </>
    )
};

export default Home;