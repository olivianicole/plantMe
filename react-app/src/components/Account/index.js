import React, { useEffect, useState } from "react";
import { authenticate } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import ShopForm from "./ShopForm";
import Listing from "../Listing";
import ListingModal from "../ListingModal";
import "./Account.css";
import { getUserFavorites } from "../../store/favorites";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.session?.user?.current_user);
  const favorites = useSelector((state) => state?.favorites?.favorites?.favorites);
  const listings = useSelector((state) => state?.session?.user?.current_user?.shop.listings);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showShopForm, setShowShopForm] = useState(false);
  const [showShopInfo, setShowShopInfo] = useState(false);
  
  useEffect(() => {
    if (!user) dispatch(authenticate());
    if (!favorites) dispatch(getUserFavorites(user.id));
    

  }, [user, dispatch])

  let option;

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
  } else {
    option = (
      <>
        <div className="account-shop-container">
          <div>
            <div className="account-shop-title">Manage Your Shop</div>
            <img src={user.shop.shop_logo}/>
          </div>
          <div>
            <div className="account-shop-name">{user.shop.name}</div>
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
                      <Listing listing={listing} />
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
  } 

  const openFavorites = () => {
    setShowFavorites(true);
    setShowShopInfo(false);
    setShowShopForm(false);
  }

  const openShopInfo = () => {
    if (user.shop){
      setShowShopInfo(true);
      setShowShopForm(false);
      setShowFavorites(false)
    } else {
      setShowShopForm(true);
      setShowFavorites(false);
      setShowShopInfo(false);
    }
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
            </div>
            <div className="account-page-lower-container"> 
              {option}
            </div>
      </div>
    </>
  );
}
export default Account;
