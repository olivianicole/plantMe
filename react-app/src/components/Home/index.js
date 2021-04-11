import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings } from "../../store/listings";
// import { NavLink } from "react-router-dom";
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

    return (
        <>
            <div className="home-page-container">
                <div className="home-page-welcome-container">
                    <div className="home-page-user-container">
                        <div>
                            {`Welcome Back, ${user.first_name}!`}
                        </div>
                    </div>
                    <div className="home-page-suggested-listings">
                        <div className="suggested-text-bold">Suggested Listings <p className="suggested-text-light">Based on what others are loving lately</p></div>
                        <div className="suggested-listing-container">
                            {suggestedListings?.map((listing) =>  {
                                    return (
                                        <a href={`/listing/${listing.id}`}className="suggested-listing-individual-container">
                                            <img src={listing.image_1} alt={listing.description} /> 
                                            <div className="suggested-listing-text">{listing.name}</div>
                                        </a>
                                    )
                            }
                            )}
                        </div>
                    </div>
                </div>
                <div className="home-page-listing-grid">
                    {listings?.map((listing) => <Listing className="home-page-listing-item" key={listing.id} listing={listing} /> )}
                </div>
            </div>
        </>
    )
};

export default Home;