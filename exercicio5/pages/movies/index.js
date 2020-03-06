import React from "react";
import axios from "axios";
import Link from 'next/link'
import styled from '@emotion/styled'

let List = styled.ul({
  textAlign: 'center'
});

let Item = styled.li({
  fontSize: '20px'
});


function Movies(props) {  
  return (
    <List>
      {props.movies.map(movie => (
        <Item key={movie.id}>
          {<Link href="movies/[id]" as={'/movies/' + movie.id}>{movie.title}</Link>}
        </Item>
      )
      )}
    </List>
  );
}

Movies.getInitialProps = async () => {
  const response = await axios('http://localhost:3000/api/movies');
  return { movies: response.data.results };
};

export default Movies;
