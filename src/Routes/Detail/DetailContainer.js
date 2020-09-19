import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from "react-router-dom";
import {tvAPI, moviesAPI} from "../../api"

const DetailContainer = ({ pathname }) => {

    let {id} = useParams();
    let location = useLocation();

    const [item, setItem] = useState({
        result : {},
        resulterror : null,
        loading : true
    })

    // 화면이 로딩될때 무조건 실행되는 기능
    useEffect(() => {
        // networking
        getData()
    }, [id])

    const getData = async () => {
        console.log("123");
    }



    return (
        <div>
            <h1>
                {id}
            </h1>
        </div>
    );
};

export default DetailContainer;