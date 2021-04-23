import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { authenticate } from "../../store/session";
import { newListing } from "../../store/listings";
import "./ListingModal.css"

const NewListing = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state?.session?.user?.current_user);

    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ image_1, setImage1] = useState(null);
    const [ image_2, setImage2] = useState(null);
    const [ image_3, setImage3] = useState(null);
    const [ category_id, setCategoryId] = useState();
    const [ shop_id, setShopId] = useState(user?.shop?.id);
    const [ price, setPrice] = useState("");
    const [ imageLoading, setImageLoading ] = useState(false);

    
    useEffect(() => {
    if (!user) dispatch(authenticate());
    
    }, [user, dispatch])

    const updateName = (e) => setName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);

   const updateImage = async (e, setFunction) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
        setImageLoading(true);
        const response = await fetch("/api/account/image", {
            method: "POST",
            body: formData,
        });
        if (response.ok) {
            const image = await response.json();
            await setFunction(image.url)
            setImageLoading(false);
        } else {
            setImageLoading(false);
            console.log("Upload Error")
        }
    }

    const updateImage1 = async (e) => {
        await updateImage(e, setImage1);
    }
    const updateImage2 = async (e) => {
        if (e.target.value) await updateImage(e, setImage2);
        else setImage2("");
    }
    const updateImage3 = async (e) => {
        if (e.target.value) await updateImage(e, setImage3);
        else setImage3("");
    }

    const updatePrice = (e) => setPrice(e.target.value);


    const handleNewListing = (e) => {
        e.preventDefault();
        setShowModal(false);
        if (!image_2) updateImage2(e);
        if (!image_3) updateImage2(e);
        const info = {
            "name": name, 
            "description": description,
            "image_1": image_1,
            "image_2": image_2,
            "image_3": image_3,
            "category_id": category_id,
            "shop_id": shop_id,
            "price": price   
        };
        dispatch(newListing(info));
        dispatch(authenticate());
        history.push('/account');
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
                    onChange={(e) => updateImage1(e)}
                    />
                    <input 
                    className="newlisting-image2"
                    type="file"
                    accept='image/*'
                    placeholder="Image 2"
                    onChange={(e) => updateImage2(e)}
                    />
                    <input 
                    className="newlisting-image3"
                    type="file"
                    accept='image/*'
                    placeholder="Image 3"
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