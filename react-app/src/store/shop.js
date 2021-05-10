const CREATE = "/shop/create";

const create = (shop) => ({
    type: CREATE,
    payload: shop,
});


export const createShop = (submission) => async (dispatch) => {
    const {
        shop_logo,
        name,
        owner_id,
        description,
        city,
        state,
        country
    } = submission;
    
    const response = await fetch("/api/account/open-shop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            shop_logo,
            name,
            owner_id,
            description,
            city,
            state,
            country
        })
    });
    const newShop = await response.json();

    if (response.ok){
        dispatch(create(newShop));
        return newShop;
    }
    return newShop;
}

let initialState = {};

const shopReducer = (state = initialState, action) => {
    let newState;
    console.log(action)
    switch (action.type) {
        case CREATE:
            newState = Object.assign({}, state);
            newState.shop = action.payload;
            return newState;
        default:
            return state;
    }
};

export default shopReducer;