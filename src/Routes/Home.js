import React, { useEffect, useState } from 'react';
import {moviesAPI} from "../api";

export default () => {
    const [moives, setMovies ] = useState({
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
        console.log(upComing)
    }


    useEffect(() => {
        getData();
    }, []);



    return (
        <div>
            <h1>{moives.nowPlaying.length}</h1>
        </div>
    );
};
