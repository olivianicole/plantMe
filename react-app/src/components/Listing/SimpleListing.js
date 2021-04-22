import React from "react";
import './Listing.css';

const SimpleListing = ({ listing }) => {

    let priceValue;
    let p; 
    if (listing.listing) {
        p = listing?.listing?.price?.toString().length
        console.log(p)
    } else {
        p = listing.price.toString().length
    }
    
    if (p === 1 || p === 2) priceValue = (`$ ${listing.price || listing.listing.price}.00`)
    if (p === 3) priceValue = (`$ ${listing.price || listing.listing.price}0`)
    if (p >= 4) priceValue = (`$ ${listing.price || listing.listing.price}`)    

    return (
        <>
                <div className="listing-ele-container">
                    <a href={`/listing/${listing.id}` || `/listing/${listing.listing.id}`} className="listing-container listing-link-container">
                        <div className="listing-img">
                            <img src={listing.image_1 || listing.listing.image_1} alt={listing.description || listing.listing.description}/>
                        </div>
                    <div className="listing-price">{priceValue}</div>
                    </a>
                </div>


        </>
    )
};

export default SimpleListing;