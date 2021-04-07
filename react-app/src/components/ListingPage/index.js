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
    const emptyImage = "https://www.vitraglobal.com/UPLOAD/Products/thumb/K94773300001VTE0_small.jpg";

    useEffect(() => {
        if (!listing) dispatch(getCurrentListing(params.id));
    }, [listing, dispatch, params]);

    const controlsOptions = {
        show: true,
        position: "middle",
        shape: "circle",
        width: "48px",
        height: "48px",
    }

    const indicatorOptions = {
        show: false,
    }

    return (
        <>
            <div className="listing-page-container">
                <div className="listing-image-carousel">
                    <SimpleCarousel controlsOptions={controlsOptions} indicatorOptions={indicatorOptions}>
                        <div><img src={listing?.image_1} alt={listing?.description}/></div>
                        <div><img src={listing?.image_2 || emptyImage} alt={listing?.description || "no additional images"}/></div>
                        <div><img src={listing?.image_3 || emptyImage} alt={listing?.description || "no additional images"}/></div>
                    </SimpleCarousel>
                </div>
            </div>
        </>
    )
};

export default ListingPage;