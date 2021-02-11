const API_KEY = 'f4442253c9a33a6be3e17bad4298dec7';
const DOMAINE = "https://api.themoviedb.org/3/";

export const getMovieFromAPi = (movieName) => {
    const url = DOMAINE + 'search/movie?api_key='+ API_KEY + '&language=fr&query=' + movieName;
    return fetch(url)
        .then( (r) => r.json() )
        .catch( (e) => console.log(e))
    ;
}

export const getMoviePictureFromAPi = (path) => {
    return'https://image.tmdb.org/t/p/w300/' + path;
}