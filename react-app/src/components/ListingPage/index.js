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
        contentCoversContainer: true,
    }

    const indicatorOptions = {
        show: false,
    }

    let priceValue;
    let p = listing?.price.toString().length
    
    if (p === 1 || p === 2) priceValue = (`$ ${listing.price}.00`)
    if (p === 3) priceValue = (`$ ${listing.price}0`)
    if (p >= 4) priceValue = (`$ ${listing.price}`)   

    return (
        <>
            <div className="listing-page-container">
                <div className="listing-page-container-left">
                    <a href="/home" className="listing-page-back"><i className="fas fa-arrow-left"></i>Back to listings</a>
                    <div className="listing-image-carousel">
                        <SimpleCarousel controlsOptions={controlsOptions} indicatorOptions={indicatorOptions}>
                            <img src={listing?.image_1} alt={listing?.description}/>
                            <img src={listing?.image_2 || emptyImage} alt={listing?.description || "no additional images"}/>
                            <img src={listing?.image_3 || emptyImage} alt={listing?.description || "no additional images"}/>
                        </SimpleCarousel>

                    </div>
                </div>
                <div className="listing-page-container-right">
                    <div className="listing-page-shop-name">{listing?.shop.name}</div>
                    <div className="listing-page-num-sales">{listing?.num_sales}</div>
                    <div className="listing-page-listing-title">{listing?.name}</div>
                    <div className="listing-page-listing-price">{priceValue}</div>
                </div>
            </div>
        </>
    )
};

export default ListingPage;