import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import AccountButton from "./AccountButton.js";
import TinyCartModal from "../CartModal/TinyCartModal";
import { useDispatch, useSelector } from "react-redux"
import { getListings } from "../../store/listings";
import SearchModal from "../SearchModal"
import Favorites from "../Favorites";
import "./NavBar.css"

const NavBar = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const [ showSearchModal, setShowSearchModal ] = useState(false);
  const totalListings = useSelector((state) => state?.listings?.allListings?.total_listings);
  console.log(totalListings)
  
  // useEffect(() => {
  //   if (!totalListings) dispatch(getListings())
  // }, [dispatch, totalListings]);
  

  // const handleSearch = (e) => {
  //   setShowSearchModal(true)
  //   console.log(e.target.value)
  //   let searchResults = totalListings?.filter((listing) => listing.name.toLowerCase().includes(e.target.value.toLowerCase()) || listing.description.toLowerCase().includes(e.target.value.toLowerCase()));
  //   console.log("set")

  //   return (
  //     <>
  //       <SearchModal searchResults={searchResults} showSearchModal={showSearchModal} setShowSearchModal={setShowSearchModal}/>
  //     </>
  //   )
  // }
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