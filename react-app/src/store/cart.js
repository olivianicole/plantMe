const ADD = "/cart/add";

const add = (addedItem) => ({
    type: ADD,
    payload: addedItem,
});



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
        dispatch(add(addedItem));
    }
    return addedItem;
};

const initialState = {};

const cartReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD:
            newState = Object.assign({}, state);
            if (newState.purchased) newState.purchased = [...newState.purchased, action.payload];
            else newState.purchased = action.payload
            return newState;
        default:
            return state;
    }
};

export default cartReducer;