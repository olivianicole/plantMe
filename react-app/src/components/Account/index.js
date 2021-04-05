import React, { useEffect } from "react";
import { authenticate } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import ShopForm from "./ShopForm";
import "./Account.css";


const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.session?.user?.current_user);
  
  useEffect(() => {
    if (!user) {
      dispatch(authenticate());
    }
  }, [user, dispatch])

  let option;
  const openFavorites = () => {
    option = (
      <>
      </>
    )
    return option;
  };

  const openShopInfo = (user) => {
    if (user.shop) {
      option = (
        <>
        </>
      )
    } else {
      option = (
        <>
          <div className="option-container">
            <ShopForm />
          </div>
        </>
      )
    }
    return option;
  }

  return (
    <>
      <div className="acount-page-container">
          <div className="account-first-name">{user?.first_name}</div>
          <div className="account-links">
            <button onClick={openFavorites} className="fav account-link-container">
              <i className="fas fa-heart account-heart"></i>
            </button>
            <button onClick={openShopInfo} className="store account-link-container">
              <i className="fas fa-store account-store"></i>
            </button>
          </div>
      </div>
    </>
  );
}
export default Account;
