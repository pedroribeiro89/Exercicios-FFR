import React from "react";
import axios from "axios";
import styled from '@emotion/styled'


let Article = styled.article({
    width: '100%'
});

let ArticleTitle = styled.h1({
    color: 'black',
    textAlign: 'center',
    fontSize: '50px'
});

let ArticleOverview = styled.h1({
    color: 'blue',
    textAlign: 'center',
    fontSize: '20px'
});

function MoviesDetail(props) {
    return (
        <Article>
            <ArticleTitle>{props.original_title}</ArticleTitle>
            <ArticleOverview>{props.overview}</ArticleOverview>
        </Article>
    );
}

MoviesDetail.getInitialProps = async ({query}) => {
    const response = await axios('http://localhost:3000/api/movies/' + query.id);
    return {original_title: response.data.original_title, overview: response.data.overview};
};

export default MoviesDetail;
