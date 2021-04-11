const BUY = "/cart/buy";
const ADD = "/cart/add"

const buy = (addedItem) => ({
    type: BUY,
    payload: addedItem,
});

export const add = (item) => ({
    type: ADD,
    payload: item,
})



export const purchase = (itemDetails) => async (dispatch) => {
    const { user_id, shop_id, quantity } = itemDetails;
    const response = await fetch("/api/cart/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        user_id,
        shop_id,
        quantity,
        }),
    });
    const addedItem = await response.json();
    if (response.ok) {
        dispatch(buy(addedItem));
    }
    return addedItem;
};


const initialState = {};

const cartReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case BUY:
            newState = Object.assign({}, state);
            if (newState.purchased) newState.purchased = [...newState.purchased, action.payload];
            else newState.purchased = action.payload
            return newState;
        case ADD:
            newState = Object.assign({}, state);
            if (newState.cart) newState.cart.push(action.payload)
            else newState.cart = [action.payload];
            return newState;
        default:
            return state;
    }
};

export default cartReducer;