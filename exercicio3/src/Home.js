import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {

  return (
      <article>
        <h1>Hello CodeSandbox</h1>
        <Link to={'/movies/'}>Lista de filmes</Link>
      </article>
  );
};