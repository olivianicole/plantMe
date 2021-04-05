import React from "react";
import './Listing.css';

const Listing = ({ listing }) => {

    return (
        <>
            <div className="listing-container">
                <div className="listing-img">
                    <img src={listing.image_1} alt={listing.description}/>
                </div>
                <div>{listing.price}</div>
            </div>

        </>
    )
};

export default Listing;


// name, description, image_1, 
// image_2?, image_3?, category_id, 
// shop_id, price, category, 
// shop, favorites, reviews
