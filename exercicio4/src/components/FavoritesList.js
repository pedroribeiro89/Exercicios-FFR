import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../actions/favoriteActions";

export const FavoritesList = () => {
  const dispatch = useDispatch();
  const favoritesState = useSelector(state => state.favorites);
  return (
    <>
      <article>
        <h1>Lista de filmes favoritos</h1>
        <ul>
          {favoritesState.favorites.map(favMovie => (
            <li key={favMovie.id}>
              <Link to={'/movies/'+favMovie.id}>{favMovie.title}</Link>
              <button onClick={() => dispatch(removeFavorite(favMovie))}>remover</button>
            </li>
            )
          )}
        </ul>
      </article>
    </>
  );
};
