import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
    
const NewListing = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ image_1, setImage1] = useState("");
    const [ image_2, setImage2] = useState("");
    const [ image_3, setImage3] = useState("");
    const [ category_id, setCategoryId] = useState("");
    const [ shop_id, setShopId] = useState("");
    const [ price, setPrice] = useState("");
    const [ imageLoading, setImageLoading ] = useState(false);

    const user = useSelector((state) => state?.session?.user?.current_user);
    
    useEffect(() => {
    if (!user) dispatch(authenticate());
    if (!favorites) dispatch(getUserFavorites(user.id));
    

    }, [user, dispatch])

    const updateName = (e) => {};
    const updateDescription = (e) => {};
    const updateImage1 = (e) => {};
    const updateImage2 = (e) => {};
    const updateImage3 = (e) => {};
    const updateCategoryId = () => setCategoryId(null);
    const updateShopId = () => setShopId(user?.shop?.id);
    const updatePrice = (e) => {};


    const handleNewListing = (e) => {
        e.preventDefault();
        updateCategoryId();
        const newListing = {
            "name": name, 
            "description": description,
            "image_1": image_1,
            "image_2": image_2,
            "image_3": image_3,
            "category_id": category_id,
            "shop_id": shop_id,
            "price": price   
        };
    };

    

    return (
        <>
            <div className="newlisting-container">
                <form
                className="newlisting-form"
                onSubmit={(e) => handleNewListing(e)}>

                </form>
            </div>
        </>
    )
};

export default NewListing;