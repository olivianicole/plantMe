import React, { useEffect, useState } from "react";
import { Modal } from "../../context/Modal";
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
            <Modal onClose={() => setShowModal(false)}>
                <NewListing setShowModal={setShowModal} />
            </Modal>
            )}
        </>
    )
};

export default ListingModal;