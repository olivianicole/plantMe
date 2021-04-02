import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import "./NavBar.css";

function AccountButton ({ setAuthenticated }) {
    const [ showMenu, setShowMenu ] = useState(false);

    const closeMenu = () => {
        setShowMenu(false);
    };

    const openMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };

    useEffect(() => {
        if (!showMenu) return;

        document.addEventListener("mouseEnter", closeMenu);

        return () => document.removeEventListener("mouseEnter", closeMenu);
    }, [showMenu]);

    return (
        <div className="account-menu-container">
            <div className="account-menu-button" onClick={openMenu}>
                <i className="fas fa-seedling"></i>
            </div>
            {showMenu && (
            <div className="account-menu">
                <div onClick={closeMenu} className="account-menu-dropdown">
                    <NavLink to="/home" className="account-menu-dropdown-text">Home</NavLink>
                </div>
                <div onClick={closeMenu} className="account-menu-dropdown">
                    <NavLink to="/account" className="account-menu-dropdown-text">Account</NavLink>
                </div>
                <div onClick={closeMenu}>
                    <LogoutButton setAuthenticated={setAuthenticated} />
                </div>
            </div>
            )}
        </div>
    )
}

export default AccountButton;