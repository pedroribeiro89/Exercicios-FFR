import React, {useState, useEffect} from "react";
import { MoviesService } from "../services/MoviesService";

export const MoviesDetail = (props) => {

    const [movie, setMovie] = useState({});

    const requestMovie = async () => {
      const response = await MoviesService.getMovie(props.match.params.id);
      console.log(response);
      setMovie({original_title: response.data.original_title, overview: response.data.overview});
    };

    useEffect(() => { requestMovie(); }, []);

    return (
        <article>
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
        </article>
    );
};
