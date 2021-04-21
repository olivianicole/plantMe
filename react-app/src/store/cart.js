const BUY = "/cart/buy";
const ADD = "/cart/add"
const LOAD = "/cart/load";

const buy = (item) => ({
    type: BUY,
    payload: item,
});

export const add = (item) => ({
    type: ADD,
    payload: item,
});

const load = (items) => ({
    type: LOAD,
    payload: items,
});


export const getCart = () => async (dispatch) => {
    const response = await fetch('/api/cart', {
        headers : {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        const items = await response.json();
        dispatch(load(items));
        return response;
    }
};

export const addToCart = (itemDetails) => async (dispatch) => {
    const { user_id, listing_id, quantity } = itemDetails;
    console.log("item details in the thunk", itemDetails)
    const response = await fetch('/api/cart/add', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id,
            listing_id,
            quantity,
        }),
    });
    console.log("response", response)
    const item = await response.json();
    if (response.ok){
        dispatch(add(item));
        return item;
    }
    return item;
}

export const purchase = (itemDetails) => async (dispatch) => {
    const { user_id, listing_id, quantity } = itemDetails;
    const response = await fetch("/api/cart/purchase", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            user_id,
            listing_id,
            quantity,
        }),
    });
    const item = await response.json();
    if (response.ok) {
        dispatch(buy(item));
    }
    return item;
};


const initialState = {};

const cartReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case BUY:
            newState = Object.assign({}, state);
            if (newState.purchased) newState.purchased.push(action.payload)
            else newState.purchased = [action.payload];
            return newState;
        case ADD:
            newState = Object.assign({}, state);
            if (newState.cart) {
                newState.cart = [...newState.cart, action.cart]
            } else {
                newState.cart = action.like
            }
      return newState;
        case LOAD:
            newState = Object.assign({}, state);
            newState.cart = action.payload;
            return newState;
        default:
            return state;
    }
};

export default cartReducer;