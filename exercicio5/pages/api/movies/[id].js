import axios from "axios";

export default (req, res) => {
    const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";
    const _withBaseUrl = (path) => {
        return `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`;
      };

    const { query: {id} } = req;
    res.setHeader("Content-Type", "application/json");
    axios(_withBaseUrl("movie/"+id)).then(response => {
      res.end(JSON.stringify(response.data));
    }).catch(error => console.error(error));
    
}