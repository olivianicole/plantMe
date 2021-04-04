import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllListings } from "../../store/listings";
import { authenticate } from "../../store/session";

const Home = ({ authenticated }) => {
    const dispatch = useDispatch();
    const listings = useSelector((state) => {
        console.log(state.listings?.listings?.all_listings);
    })

    const user = useSelector((state) => state?.session?.user?.current_user);

    useEffect(() => {
        if (!listings){
            dispatch(getAllListings());
        }
        if (!user) {
            dispatch(authenticate())
        }
    }, [dispatch, listings, user])
    return (
        <>
            <div>

            </div>
        </>
    )
};

export default Home;