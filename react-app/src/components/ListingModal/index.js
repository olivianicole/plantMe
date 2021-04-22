import React, { useEffect, useState } from "react";
import { NewListingModal } from "../../context/Modal";
import NewListing from "./NewListing.js"
import "./ListingModal.css";

const ListingModal = () => {
    const [ showModal, setShowModal ] = useState(false);
    return (
        <>
            <button 
            onClick={() => setShowModal(true)}
            className="new-listing-button">
            New Listing
            </button>
            { showModal && (
            <NewListingModal onClose={() => setShowModal(false)}>
                <NewListing setShowModal={setShowModal} />
            </NewListingModal>
            )}
        </>
    )
};

export default ListingModal;