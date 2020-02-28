import { SET_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriteActions";

  
  const initialState = {
    favorites: []
  };
  
  export const favorites = (state = initialState, action) => {
    let isFavorite = (movieTest) => {
        for (let movie of state.favorites) {
            if (movie.title === movieTest.title) { return true; }
        }
        return false;
    };

    let removeFavorite = (movieRemove) => {
        let newFavorites =  [...state.favorites];
        //for (let i = 0; i < newFavorites.length; ++i) {
       //     if (newFavorites[i].title === movieRemove.title) {
        //        newFavorites.splice(i);
        //    }
        //}
        return newFavorites.filter((m) => m.title !== movieRemove.title);
    };

    switch (action.type) {
      case SET_FAVORITE:
        return {
          ...state,
          favorites: isFavorite(action.payload) ? [...state.favorites] : [...state.favorites, action.payload]
        };
      case REMOVE_FAVORITE:
        return {
            ...state,
            favorites: removeFavorite(action.payload)
        };
      default:
        return state;
    }
  };
  