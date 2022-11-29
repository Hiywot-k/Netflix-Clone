const API_KEY="c28f60c5dcec522b4f273b4714888b5a";

const request={
    fetchTrading:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRateMovies:`/movie/top_rated?api_key=${API_KEY}&Language=eu-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}& with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}& with_genres=99`
}
export default request;