import React, {useEffect, useState} from 'react';
import {tvAPI} from "../api";

export default () => {
    const [tv, setTv] = useState({
        topRated: [],
        popular: [],
        airingToday: [],
        topRatedError: null,
        popularError: null,
        airingTodayError: null
    });

    const getData = async () => {
        const [topRated, topRatedError] = await tvAPI.topRated();
        const [popular, popularError] = await tvAPI.popular();
        const [airingToday, airingTodayError] = await tvAPI.airingToday();
        setTv({
            topRated,
            popular,
            airingToday,
            topRatedError,
            popularError,
            airingTodayError
        })
    }

    useEffect( () => {
        getData();
    }, []);

    return (
        <div>
            <h1>tv: {tv.topRated?.length}</h1>
        </div>
    )
};