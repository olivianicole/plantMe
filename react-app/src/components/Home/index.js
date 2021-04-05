import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings } from "../../store/listings";

const Home = ({ authenticated }) => {
    const dispatch = useDispatch();
    const listings = useSelector((state) => {
        return state.listings.allListings;
    })
    // console.log("LISTINGS", listings);
    

    useEffect(() => {
        if (!listings){
            dispatch(getListings());
        }
    }, [dispatch, listings])
    return (
        <>
            <div>

            </div>
        </>
    )
};

export default Home;