import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { authenticate } from "../../store/session";
import "./ListingModal.css"

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

    const user = useSelector((state) => state?.session?.user?.current_user);
    
    useEffect(() => {
    if (!user) dispatch(authenticate());
    

    }, [user, dispatch])

    const updateName = (e) => setName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);

    const updateImage1 = async (e) => {
        const image = e.target.files[0]
        const formData = new FormData();
        formData.append("image1", image);
        setImage1(formData)
    };
    const updateImage2 = async (e) => {
        const image = e.target.files[0]
        const formData = new FormData();
        formData.append("image2", image);
        setImage2(formData)
    };
    const updateImage3 = async (e) => {
        const image = e.target.files[0]
        const formData = new FormData();
        formData.append("image3", image);
        setImage3(formData)
    };
  
    const updateCategoryId = () => setCategoryId(null);
    const updateShopId = () => setShopId(user?.shop?.id);
    const updatePrice = (e) => setPrice(e.target.value);


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
                    <div className="newlisting-title">Add a Listing to Your Shop</div>
                    <input 
                    className="newlisting-name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => updateName(e)}
                    />
                    <textarea
                    className="newlisting-description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => updateDescription(e)}
                    />
                    <input 
                    className="newlisting-image1"
                    type="file"
                    accept='image/*'
                    placeholder="Image 1"
                    value={image_1}
                    onChange={(e) => updateImage1(e)}
                    />
                    <input 
                    className="newlisting-image2"
                    type="file"
                    accept='image/*'
                    placeholder="Image 2"
                    value={image_2}
                    onChange={(e) => updateImage2(e)}
                    />
                    <input 
                    className="newlisting-image3"
                    type="file"
                    accept='image/*'
                    placeholder="Image 3"
                    value={image_3}
                    onChange={(e) => updateImage3(e)}
                    />
                    <input 
                    className="newlisting-price"
                    type="text"
                    placeholder="Price ex. 10.00"
                    value={price}
                    onChange={(e) => updatePrice(e)}
                    />
                    <button className="newlisting-submit" onClick={(e) => handleNewListing(e)}>Add to Your Shop</button>
                </form>
            </div>
        </>
    )
};

export default NewListing;