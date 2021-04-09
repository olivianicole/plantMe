import React from "react";
import './Listing.css';

const Listing = ({ listing }) => {

    let priceValue;
    let p = listing.price.toString().length
    
    if (p === 1 || p === 2) priceValue = (`$ ${listing.price}.00`)
    if (p === 3) priceValue = (`$ ${listing.price}0`)
    if (p >= 4) priceValue = (`$ ${listing.price}`)    

    return (
        <>
            <a href={`/listing/${listing.id}`} className="listing-container">
                <div className="listing-img">
                    <img src={listing.image_1} alt={listing.description}/>
                </div>
                <div className="listing-price">{priceValue}</div>
            </a>

        </>
    )
};

export default Listing;


// name, description, image_1, 
// image_2?, image_3?, category_id, 
// shop_id, price, category, 
// shop, favorites, reviews
