import React from "react";
import { useDispatch } from "react-redux";
import Listing from "../Listing";

const Search = ({ searchResults, setShowModal }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="search-page-container">
                <div className="search-page-title">Search Results</div>
                <div className="results-listings-grid">
                    {searchResults?.map((listing) => {
                        return (
                            console.log("made it"),
                            <Listing listing={listing} />
                        )
                })}
                </div>
            </div>
        </>
    )

};

export default Search;