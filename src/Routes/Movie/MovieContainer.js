import React, { useEffect, useState } from 'react';
import {moviesAPI} from "../../api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = () => {
    const [movies, setMovies] = useState({
        nowPlaying : [],
        upComing : [],
        popular: [],
        nowPlayingError: null,
        upComingError: null,
        popularError: null,
        loading: true
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
            popularError,
            loading: false
        })
        console.log(nowPlaying);
    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <MoviePresenter {...movies} />
    );
};

export default MovieContainer;