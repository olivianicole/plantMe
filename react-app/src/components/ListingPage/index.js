import React, { useEffect } from "react";
import { getCurrentListing } from "../../store/listings";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const ListingPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const listing = useSelector((state) => state.listings?.allListings?.current_listing);
    console.log(listing);

    useEffect(() => {
        if (!listing) dispatch(getCurrentListing(params.id));
    }, [listing, dispatch, params]);

    return (
        <>
        </>
    )
};

export default ListingPage;