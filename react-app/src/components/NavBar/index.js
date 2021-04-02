import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import logout from "../../store/session"
import AccountButton from "./AccountButton.js";

import "./NavBar.css"
const NavBar = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
      setAuthenticated(false);
      dispatch(logout);
  }

  if (!authenticated) {
    return<Redirect to="/" />
  }

  let nav;
  if (authenticated) {
    nav = (
      <nav className="nav-component">
        <div className="nav-component-top">
          <div>
              <NavLink className="header-site-title" to="/home" exact={true} activeClassName="active">plantMe</NavLink>
          </div>
          <div className="nav-container-right">
            <NavLink className="navbar-favorites-link" to="/favorites">
              <div >
                <i class="far fa-heart" />
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