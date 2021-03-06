import React, { useEffect, useState } from "react";
import { getCurrentListing } from "../../store/listings";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SimpleCarousel from 'simple-react-carousel';
import CartModal from "../CartModal";
import priceConverter from "../../services/priceconverter";
import FavoriteButton from "../FavoriteButton/ListingFavButton";
import "./ListingPage.css"

const ListingPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [quantity, setQuantity] = useState(1);
    
    const listing = useSelector((state) => state.listings?.allListings?.current_listing);
    const emptyImage = "https://www.vitraglobal.com/UPLOAD/Products/thumb/K94773300001VTE0_small.jpg";
    useEffect(() => {
        if (!listing) dispatch(getCurrentListing(params.id));

    }, [listing, dispatch]);

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
  
    let numSales = listing?.num_sales.toLocaleString(navigator.language, {minimumFractionDigits: 0});

     const item = {
            name: listing?.name,
            image: listing?.image_1,
            price: listing?.price,
            quantity, 
            listing_id: listing?.id
        }
    const listingPrice = priceConverter(listing?.price)
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
                    <div className="listing-page-num-sales">{numSales} sales</div>
                    <div className="listing-page-listing-title">{listing?.name}</div>
                    <div className="listing-page-price-fav">
                        <div className="listing-page-listing-price">{listingPrice}</div>
                        <FavoriteButton listing={listing}/>
                    </div>
                    <div className="listing-page-quantity-container">Quantity
                        <select className="quantity-select" onChange={(e) => setQuantity(e.target.value)}>
                            <option value={1} className="quantity-option">1</option>
                            <option value={2} className="quantity-option">2</option>
                            <option value={3} className="quantity-option">3</option>
                            <option value={4} className="quantity-option">4</option>
                            <option value={5} className="quantity-option">5</option>
                        </select>
                    </div>
                   <CartModal item={item} /> 
                   <div className="listing-page-listing-description-title">Description</div>
                   <div className="listing-page-listing-description">{listing?.description}</div>
                </div>
            </div>
        </>
    )
};

export default ListingPage;