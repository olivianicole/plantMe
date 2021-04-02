import React, { useEffect } from "react";
import { authenticate } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import "./Account.css";
import { NavLink } from "react-router-dom";


function Account() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session?.user?.current_user);
  
  useEffect(() => {
    if (!user) {
      dispatch(authenticate());
    }
  }, [user, dispatch])

  return (
    <>
      <div className="acount-page-container">
          <div className="account-first-name">{user.first_name}</div>
          <NavLink to="/favorites" className="account-favorites-navlink">
            <div className="account-link-to-favorites">
              <div className="account-fav-inner">
                <i class="fas fa-heart"></i>
              </div>
            </div>
          </NavLink>
      </div>
    </>
  );
}
export default Account;
