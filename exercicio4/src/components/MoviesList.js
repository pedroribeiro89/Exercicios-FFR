import React, {useState, useEffect} from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../actions/favoriteActions";

export const MoviesList = () => {
  const dispatch = useDispatch();
  const favoritesState = useSelector(state => state.favorites);

  const [movies, setMovies] = useState([]);

  const requestMovies = async () => {
    const response = await MoviesService.getPopularMovies();
    setMovies(response['data']['results']);
  };

  useEffect(() => { requestMovies(); }, []);
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={'/movies/'+movie.id}>{movie.title}</Link>
            <button onClick={() => dispatch(setFavorite(movie))}>add favorito</button>
          </li>
          )
        )}
      </ul>

      <article>
        <h1>Lista de filmes favoritos</h1>
        <Link to={'/favorites/'}>Ir para pagina</Link>
        <ul>
          {favoritesState.favorites.map(favMovie => (
            <li key={favMovie.id}>
              <Link to={'/movies/'+favMovie.id}>{favMovie.title}</Link>
            </li>
            )
          )}
        </ul>
      </article>
    </>
  );
};
