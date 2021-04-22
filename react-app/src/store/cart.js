const BUY = "/cart/buy";
const ADD = "/cart/add"
const LOAD = "/cart/load";
const REMOVE = "/item/delete";
const PURCHASES = "/purchases/load";

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

const remove = (item) => ({
  type: REMOVE,
  payload: item
});

const purchases = (items) => ({
    type: PURCHASES,
    payload: items
})


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

export const getPurchased = (userId) => async (dispatch) => {
    const response = await fetch(`/api/cart/${userId}`, {
        headers : {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        const items = await response.json();
        dispatch(purchases(items));
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

export const removeFromCart = (itemId) => async (dispatch) => {
    const response = await fetch(`/api/cart/${itemId}/delete`, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({ itemId })
  });
    console.log(response)
    const deletedItem = await response.json();

    if (response.ok) {
        dispatch(remove(deletedItem))
    }
  return deletedItem;
};

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


const initialState = { cart: [] };

const cartReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case BUY:
            newState = Object.assign({}, state);
            if (newState.purchased) newState.purchased.push(action.payload)
            else newState.purchased = [action.payload];
            return newState;
        case ADD:
            console.log(state)
            if (state.cart.your_cart) newState = { cart: [...state.cart.your_cart, action.payload]};
            else newState = { cart: [action.payload]}
            return newState;
        case LOAD:
            newState = Object.assign({}, state);
            newState.cart = action.payload;
            return newState;
        case REMOVE:
            newState = Object.assign({}, state)
            console.log(newState.cart)
            newState.cart.your_cart = newState.cart.your_cart.filter(cart => cart.id !== action.payload.id)
            return newState;
        case PURCHASES:
            newState = Object.assign({}, state);
            newState.purchases = action.payload;
            return newState;
        default:
            return state;
    }
};

export default cartReducer;