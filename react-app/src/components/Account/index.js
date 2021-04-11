import React, { useEffect, useState } from "react";
import { authenticate } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import ShopForm from "./ShopForm";
import Listing from "../Listing";
import "./Account.css";
import { getUserFavorites } from "../../store/favorites";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.session?.user?.current_user);
  const favorites = useSelector((state) => state?.favorites?.favorites?.favorites);
  console.log(favorites);
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
            <Listing listing={favorite.listing} />
            <div>{favorite.listing.name}</div>
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
      <div>show shop info</div>
    )
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
