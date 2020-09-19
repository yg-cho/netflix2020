// import axios from "axios";
//
// const api = axios.create({
//     baseURL : "https://api.themoviedb.org/3/",
//     params: {
//         api_key: "b69f980839218fe0b9d673cab7e15ee9",
//         languages: "en-US"
//     }
// });
//

//
//

import axios from 'axios';

const TMDB_KEY = "b69f980839218fe0b9d673cab7e15ee9";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3/${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    });

const getAnything = async (path, params = {}) => {
    try{
        const {
            data: { results },
            data
        } = await makeRequest(path, params)
        return [ results || data, null]
    }
    catch(e){
        console.log(e);
        return [null, e]
    }
}

export const moviesAPI = {
    nowPlaying: () => getAnything("movie/now_playing"),
    upComing: () => getAnything("movie/upcoming"),
    popular: () => getAnything("movie/popular"),
    movieDetail: id =>
        getAnything(`movie/${id}`,
            { append_to_response: "videos" }
        ),
    search: (query) => getAnything(`search/movie`, { query }),
    similar: id => getAnything(`movie/${id}/similar`)

}

export const tvAPI = {
    topRated: () => getAnything("tv/top_rated"),
    popular: () => getAnything("tv/popular"),
    airingToday: () => getAnything("tv/airing_today"),
    tvDetail: id=>
        getAnything(`tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: query =>
        getAnything(`search/tv`,{query}),
    similar: id => getAnything(`tv/${id}/similar`)

}