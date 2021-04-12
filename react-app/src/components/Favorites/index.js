import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserFavorites } from "../../store/favorites";
import Listing from "../Listing";
import "./Favorite.css";
const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state?.favorites?.favorites?.favorites);
    const user = useSelector((state) => state?.session?.user?.current_user);

    useEffect(() => {
        if (!favorites) dispatch(getUserFavorites(user.id))
    }, [dispatch, favorites])
    return (
        <>
            <div className="favorite-page-container">
                <div className="favorite-page-title">Check out the items you've favorited! </div>
                <div className="favorite-listings-grid">
                    {favorites?.map((favorite) => {
                        return (
                            <Listing listing={favorite.listing} />
                        )
                })}
                </div>
            </div>
        </>
    )
};

export default Favorites;