const GET_LISTINGS = "/listing/get_listings";

const getListings = (listings) => ({
    type: GET_LISTINGS,
    payload: listings
});

export const getAllListings = () => async (dispatch) => {
    const response = await fetch('/api/listing', {
        headers : {
            'Content-Type': 'application/json'
        }
    });
    const listings = await response.json();
    if (response.ok) {
        dispatch(getListings(listings))
        return response;
    }
};

const initialState = {};

const listingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_LISTINGS:
            newState = Object.assign({}, state);
            newState.sips = action.payload;
            return newState;
        default:
            return state;
    }
};

export default listingReducer;