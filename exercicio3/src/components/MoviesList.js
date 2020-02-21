import React, {useState, useEffect} from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from "react-router-dom";

export const MoviesList = () => {

  const [movies, setMovies] = useState([]);

  const requestMovies = async () => {
    const response = await MoviesService.getPopularMovies();
    setMovies(response['data']['results']);
  };

  useEffect(() => { requestMovies(); }, []);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={'/movies/'+movie.id}>{movie.title}</Link>
        </li>
        )
      )}
    </ul>
  );
};
