import React, { useEffect, useState } from "react";
import { authenticate } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import ShopForm from "./ShopForm";
import Listing from "../Listing";
import SimpleListing from "../Listing/SimpleListing";
import ListingModal from "../ListingModal";
import "./Account.css";
import { getUserFavorites } from "../../store/favorites";
import { getPurchased } from "../../store/cart";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.session?.user?.current_user);
  const favorites = useSelector((state) => state?.favorites?.favorites?.favorites);
  const listings = useSelector((state) => state?.session?.user?.current_user?.shop?.listings);
  const items = useSelector((state) => state?.cart?.purchases?.your_purchases);
  
  const [showFavorites, setShowFavorites] = useState(false);
  const [showShopForm, setShowShopForm] = useState(false);
  const [showShopInfo, setShowShopInfo] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  useEffect(() => {
    if (!user) dispatch(authenticate());
    if (!favorites) dispatch(getUserFavorites(user.id));
    if (!items) dispatch(getPurchased(user.id));
    
  }, [dispatch, user, favorites, items]);
  
  let option;


  const getUnique = (items) => {

  }

  if (showFavorites) {
    option = (
      <div className="account-favorites-container">
      {favorites?.map((favorite) => {
      return (
          <div className="account-favorite-container">
              <div>
                <Listing listing={favorite.listing} />
              </div>
              <div className="account-indiv-text-container">
                <div className="account-favorite-listing-name">{favorite.listing.name}</div>
                <div className="account-favorite-listing-description">{favorite.listing.description}</div>
              </div>
          </div>

          )
        })}
      </div>
    )
  } else if (showShopForm) {
    option = (
      <div>
        <ShopForm />
      </div>
    )
  } else if (showShopInfo) {
    
    option = (
      <>
        <div className="account-shop-container">
          <div>
            <div className="account-shop-title">Manage Your Shop</div>
            <img src={user?.shop?.shop_logo}/>
          </div>
          <div>
            <div className="account-shop-name">{user?.shop.name}</div>
            <div className="account-shop-description">{user.shop.description}</div>
            <ListingModal />
          </div>
        </div>
        <div className="account-indiv-container"> 
        <p className="account-your-listings">Your shop is currently selling:</p>
          {listings?.map((listing) => {
            return (
              <div className="account-indiv-listing">
                  <div>
                      <SimpleListing listing={listing} />
                  </div>
                  <div className="account-indiv-text-container">
                    <div className="account-indiv-name">{listing.name}</div>
                    <div className="account-indiv-description">{listing.description}</div>
                  </div>
              </div>
            )
          })}
        </div>
      </>
    )
  } else if (showReviews) {
      if (items) {
        option = (
          <>
          <div className="account-review-container">
              {items?.map((item) => {
                return (
                  <div className="account-review-item-container">
                    <SimpleListing listing={item} key={item.id}/>
                    <div className="review-text">Thank you for your recent purchase. The option to leave a review will become available after your item has arrived.</div>
                  </div>
                )
              })}
            </div>
          </>
        )
    
      } else {
        option = (
          <>
            <div className="account-shop-container">
              <div className="account-shop-title">Oops! You must purchase an item before you can review it.</div>
            </div>
          </>
        )
      }

  } else {
    option = (
      <>
      </>
    )
  }


  const openFavorites = () => {
    setShowFavorites(true);
    setShowShopInfo(false);
    setShowShopForm(false);
    setShowReviews(false);
  }

  const openShopInfo = () => {
    if (user.shop){
      setShowShopInfo(true);
      setShowShopForm(false);
      setShowFavorites(false);
      setShowReviews(false);
    } else {
      setShowShopForm(true);
      setShowFavorites(false);
      setShowShopInfo(false);
      setShowReviews(false);
    }
  }

  const openReviews = () => {
      setShowFavorites(false);
      setShowShopInfo(false);
      setShowShopForm(false);
      setShowReviews(true);
  }
  return (
    <>
      <div className="acount-page-container">
          <div className="account-first-name">{user?.first_name}</div>
          <div className="account-links">
            <button onClick={() => openFavorites()} className="fav account-link-container">
              <i className="fas fa-heart account-heart"></i>
            </button>
            <button onClick={() => openShopInfo()} className="store account-link-container">
              <i className="fas fa-store account-store"></i>
            </button>
            <button onClick={() => openReviews()} className="review account-link-container">
              <i className="far fa-comment-alt account-review"></i>
            </button>
            </div>
            <div className="account-page-lower-container"> 
              {option}
            </div>
      </div>
    </>
  );
}
export default Account;
