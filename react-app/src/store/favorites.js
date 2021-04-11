const ADD = "/favorite/add";
const GET_FAVORITES = "/favorite/get";
const REMOVE = "/favorite/delete";

const add = (favorite) => ({
  type: ADD,
  payload: favorite
})

const load = (favorites) => ({
  type: GET_FAVORITES,
  payload: favorites
});


const remove = (favorite) => ({
  type: REMOVE,
  payload: favorite
});

export const addFavorite = (fav) => async (dispatch) => {
  const { user_id, listing_id } = fav;
  const response = await fetch("/api/favorite/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id,
      listing_id,
    }),
  });
  const addedFav = await response.json();
  if (response.ok) {
    dispatch(add(addedFav));
  }
  return addedFav;
};

export const getUserFavorites = (userId) => async (dispatch) => {
  const response = await fetch(`/api/favorite/${userId}/`)

  const favorites = await response.json();
  if (response.ok) {
    dispatch(load(favorites))
  }
  return favorites;
};

export const deleteFavorite = (userLikeId) => async (dispatch) => {
  const response = await fetch(`/api/favorite/${userLikeId}/delete/`);

  const deletedFav = await response.json();
  console.log(deletedFav);
  if (response.ok) {
    dispatch(remove(deletedFav))
  }
  return deletedFav;
};


let initialState = {};

const favoritesReducer = (state=initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD:
      newState = Object.assign({}, state);
      if (newState.favorites) newState.favorites = [...newState.favorites.favorites, action.payload]
      else newState.favorites = [action.payload]
      return newState;
    case GET_FAVORITES:
      newState = Object.assign({}, state);
      newState.favorites = action.payload;
      return newState;
    case REMOVE:
      newState = Object.assign({}, state)
      newState.favorites = newState.favorites.favorites.filter(favorite => favorite.id !== action.payload.id)
      return newState;
    default:
      return state;
  }
}

export default favoritesReducer;