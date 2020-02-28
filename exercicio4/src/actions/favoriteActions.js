export const SET_FAVORITE = "SET_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const setFavorite = movie => ({
  type: SET_FAVORITE,
  payload: movie
});

export const removeFavorite = movie => ({
    type: REMOVE_FAVORITE,
    payload: movie
  });