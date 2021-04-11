import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../store/favorites";

const FavoriteButton = ({ listing }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.session?.user?.current_user);
    const userFavorites = useSelector((state) => {
    
        return state.favorites;
    });
 
    const liked = userFavorites?.filter((favorite) => favorite.listing_id === listing.id).length;

    let fav;
    if (liked) {
        fav = (
            <div>
                <i className="fas fa-heart" />
            </div>
        )
    } else {
        fav = (
            <div>
                <i className="far fa-heart" />
            </div>
        )
    }

    const handleClick = async () => {
        if (userFavorites) {
            const favorite = userFavorites?.filter((favorite) => favorite.listing_id === listing.id)
            if (favorite[0]) dispatch(deleteFavorite(favorite[0].id));
            else {
            const favorite = {
                user_id: user.id,
                listing_id: listing.id
            };

        }} else {
            const favorite = {
                user_id: user.id,
                listing_id: listing.id
            };
            dispatch(addFavorite(favorite))
        }
    };

    return (
        <div onClick={handleClick} className="favorite-button">
            {fav}
        </div>
    );
};

export default FavoriteButton;