import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from "react-router-dom";
import {tvAPI, moviesAPI} from "../../api"
import DetailPresenter from "./DetailPresenter";
const DetailContainer = ({ pathname }) => {

    let {id} = useParams();
    let location = useLocation();

    const [item, setItem] = useState({
        result : {},
        resultError : null,
        loading : true,
        similar : [],
        similarError : null
    })



    // 화면이 로딩될때 무조건 실행되는 기능
    useEffect(() => {
        // networking
        getData()
    })

    const getData = async () => {
        const [result, resultError] = location.pathname.includes("/movie/")
        ? await moviesAPI.movieDetail(id)
        : await tvAPI.tvDetail(id)
        const [similar, similarError] = location.pathname.includes("/movie/")
        ? await moviesAPI.similar(id)
        : await tvAPI.similar(id)
        setItem({
            result,
            resultError,
            loading: false,
            similar,
            similarError
        })
        console.log("++++++++++++++++++++++++++++++", similar);

    }



    return (
       <DetailPresenter
           {...item}
       />
    );
};

export default DetailContainer;