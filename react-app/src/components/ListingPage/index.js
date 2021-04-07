import React, { useEffect, useRef } from "react";
import { getCurrentListing } from "../../store/listings";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SimpleCarousel from 'simple-react-carousel';


import "./ListingPage.css"

const ListingPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const listing = useSelector((state) => state.listings?.allListings?.current_listing);
    console.log(listing);

    useEffect(() => {
        if (!listing) dispatch(getCurrentListing(params.id));
    }, [listing, dispatch, params]);

    const options = {
        items: 1,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
    }


    return (
        <>
            <div className="listing-page-container">
                <div className="listing-image-carousel">
                    <SimpleCarousel className="my-slider">
                        <div><img src={listing?.image_1} alt={listing?.description}/></div>
                        <div><img src={listing?.image_2 || ""} alt={listing?.description}/></div>
                        <div><img src={listing?.image_3 || ""} alt={listing?.description}/></div>
                    </SimpleCarousel>
                </div>
            </div>
        </>
    )
};

export default ListingPage;