import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings } from "../../store/listings";
import Listing from "../Listing";

const Home = ({ authenticated }) => {
    const dispatch = useDispatch();
    const listings = useSelector((state) => {
        return state.listings.allListings?.all_listings;
    })
    
    

    useEffect(() => {
        if (!listings){
            dispatch(getListings());
        }
    }, [dispatch, listings])
    return (
        <>
            <div>
                {listings?.map((listing) => <Listing key={listing.id} listing={listing} /> )}
            </div>
        </>
    )
};

export default Home;