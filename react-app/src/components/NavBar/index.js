import React, { useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import AccountButton from "./AccountButton.js";
import TinyCartModal from "../CartModal/TinyCartModal";
import { useDispatch, useSelector } from "react-redux"
import { getListings } from "../../store/listings";
import "./NavBar.css"

const NavBar = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const totalListings = useSelector((state) => state?.listings?.allListings?.total_listings);
  console.log(totalListings)
  
  useEffect(() => {
    if (!totalListings) dispatch(getListings())
  }, [dispatch, totalListings]);
  
  let searchResults = [];

  const handleSearch = (e) => {
    totalListings.filter((listing) => {
        listing.name.toLowerCase().includes()
    })
  }
  
  if (!authenticated) {
    return <Redirect to="/" />
  }

  let nav;
  if (authenticated) {
    nav = (
      <nav className="nav-component">
        <div className="nav-component-top">
          <div className="nav-container-left">
              <NavLink className="header-site-title" to="/home" exact={true} activeClassName="active">plantMe</NavLink>
              <input 
                placeholder="search"
                className="nav-search-bar"
                onChange={(e) => handleSearch(e)}
                />
          </div>
          <div className="nav-container-right">
            <TinyCartModal className="navbar-cart-link"/>
            <NavLink className="navbar-favorites-link" to="/favorites">
              <div>
                <i className="far fa-heart"/>
              </div>
            </NavLink>
            <div>
              <AccountButton setAuthenticated={setAuthenticated} />
            </div>
          </div>
        </div>
        <div className="nav-component-bottom"></div>
      </nav>
  )} else {
    nav = (
      <>
      </>
    )
  };
  return <>{nav}</>
}

export default NavBar;