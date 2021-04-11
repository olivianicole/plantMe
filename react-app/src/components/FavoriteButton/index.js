import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite, getUserFavorites } from "../../store/favorites";

const FavoriteButton = ({ listing }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.session?.user?.current_user);
    const favorites = useSelector((state) => state?.favorites?.userFavorites?.user_favorites);
    const liked = favorites?.filter((favorite) => favorite.listing_id === listing.id);
    let fav;
    if (liked?.length) {
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
    useEffect((state) => {
        if (!favorites) dispatch(getUserFavorites(user.id));
    }, [dispatch, favorites])
   
    const handleClick = async () => {
        if (liked?.length) {
            const favorite = user.favorites?.filter((favorite) => favorite.listing_id === listing.id)
            console.log(favorite)
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