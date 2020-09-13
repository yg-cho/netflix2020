import React,{useState} from 'react';
import {moviesAPI, tvAPI} from "../../api";
import SearchPresenter from "./SearchPresenter";


const SearchContainer = () => {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState({
        movies: [],
        shows: [],
        movieError: null,
        showError: null,
        loading: false
    });


    const onChange = (event) => {
        setKeyword(event.target.value);
    }

    const search = async () => {

    }

    return (
       <SearchPresenter
           {...results}
           onChange={onChange}
           onSubmit={search}
           keyword={keyword}
       />
    );
};

export default SearchContainer;