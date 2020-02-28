import React from "react";
import { Route } from "react-router-dom";
import { MoviesList } from "./components/MoviesList";
import { MoviesDetail } from "./components/MovieDetail";
import { Home } from "./Home";
import { FavoritesList } from "./components/FavoritesList";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/movies/" exact component={MoviesList} />
    <Route path="/movies/:id"  component={MoviesDetail} />
    <Route path="/favorites"  component={FavoritesList} />
  </>
);