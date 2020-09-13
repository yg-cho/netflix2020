import React, {useEffect, useState} from 'react';
import {tvAPI} from "../../api";
import TvPresenter from "./TVPresenter";
const TvContainer = () => {

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
       // <TvPresenter
       //      loading={tv.loading}
       //      topRated={tv.topRated}
       //      airingToday={tv.airingToday}
       //      popular={tv.popular}
       // />
        <TvPresenter {...tv} />
    );
};

export default TvContainer;