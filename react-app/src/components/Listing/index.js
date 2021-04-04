import React from "react";

const Listing = () => {

    return (
        <>
            <div className="listing-container">
                <img className="listing-img" src={listing.image_1} alt={listing.description}/>
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
