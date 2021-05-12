import React from "react";
import { SearchBarModal } from "../../context/Modal";
import Search from "./Search";

const SearchModal = ({ searchResults, showSearchModal, setShowSearchModal }) => {
    setShowSearchModal(true)
    return (
        <>
            { showSearchModal && (
            <SearchBarModal onClose={() => setShowSearchModal(false)}>
                <Search searchResults={searchResults} setShowSearchModal={setShowSearchModal}/>
            </SearchBarModal>
            )}
        </>
    )
};

export default SearchModal;