const LOAD = "/listing/load";
const ADD = "/listing/new";
const load = (listings) => ({
    type: LOAD,
    payload: listings,
});

const add = (listing) => ({
    type: ADD,
    payload: listing,
})
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

export const newListing = (listing) => async (dispatch) => {
    const { name, description, image_1, image_2, image_3, category_id, shop_id, price } = listing;
    console.log(listing)
    const response = await fetch('/api/account/new', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            description,
            image_1,
            image_2,
            image_3,
            category_id,
            shop_id,
            price
        })
    });
    console.log(response)
    if (response.ok) {
        const listing = await response.json();
        dispatch(add(listing));
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
        case ADD:
            newState = Object.assign({}, state);
            newState.allListings = action.payload;
            return newState;
        default:
            return state;
    }
};

export default listingsReducer;