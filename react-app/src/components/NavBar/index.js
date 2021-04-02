import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import logout from "../../store/session"
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
    <div className="nav-container">
      <nav className="nav-component">
        <div>
          <NavLink className="header-site-title" to="/home" exact={true} activeClassName="active">
           plantMe
          </NavLink>
          <NavLink className="nav-bar-favorites-link" to="/favorites">
            <i class="far fa-heart"></i>
          </NavLink>
          <NavLink className="nav-bar-account-link" to="/account">
            <i class="fas fa-seedling"></i>
          </NavLink>
          <button onClick={onLogout}>Log Out</button>
        </div>
      </nav>
    </div>
  )} else {
    nav = (
      <>
      </>
    )
  };
  return <>{nav}</>
}

export default NavBar;