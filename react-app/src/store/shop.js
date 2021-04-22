const LOAD = "shop/load";

const load = (shop) => ({
    type: LOAD,
    payload: shop
});


export const createShop = (shop) => async (dispatch) => {
    const {
        shop_logo,
        name,
        owner_id,
        description,
        city,
        state,
        country
    } = shop;

    await fetch("/api/account/open-shop", {
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
}

let initialState = {};

const shopReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state);
            newState.shop = action.coffee;
            return newState;
        default:
            return state;
    }
};

export default shopReducer;