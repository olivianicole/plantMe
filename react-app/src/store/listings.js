const LOAD = "/listing/load";

const load = (listings) => ({
    type: LOAD,
    payload: listings,
});


export const getListings = () => async (dispatch) => {
    const response = await fetch('/api/listing/', {
        headers : {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        const listings = await response.json();
        dispatch(load(listings));
        return response;
    }
};

export const getCurrentListing = (id) => async (dispatch) => {
    const response = await fetch(`/api/listing/${id}`, {
        headers : {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        const listing = await response.json();
        dispatch(load(listing));
        return response;
    }
}

const initialState = {};

const listingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state);
            newState.allListings = action.payload;
            return newState;
        default:
            return state;
    }
};

export default listingsReducer;