import React, { useEffect, useState } from 'react';
import {moviesAPI} from "../../api";


const MovieContainer = () => {
    const [movies, setMovies ] = useState({
        nowPlaying : [],
        upComing : [],
        popular: [],
        nowPlayingError: null,
        upComingError: null,
        popularError: null
    });

    const getData = async () => {
        const [nowPlaying, nowPlayingError] = await moviesAPI.nowPlaying();
        const [upComing, upComingError] = await moviesAPI.upComing();
        const [popular, popularError] = await moviesAPI.popular();
        setMovies({
            nowPlaying,
            upComing,
            popular,
            nowPlayingError,
            upComingError,
            popularError
        })
        console.log(nowPlaying);
    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            <h1>movie: {movies.nowPlaying?.length}</h1>
        </div>
    );
};

export default MovieContainer;