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
        console.log(keyword);
    }

    const onSubmit = async () => {
        setResults({ loading : true });
        if ( keyword === "") {
            return;
        }

        // networking
        const [movies, movieError] = await moviesAPI.search(keyword);
        const [shows, showError] = await tvAPI.search(keyword);

        setResults({
            movies,
            shows,
            movieError,
            showError,
            loading : false
        });
        console.log(shows);

    }



    return (
       <SearchPresenter
           {...results}
           onChange={onChange}
           onSubmit={onSubmit}
           keyword={keyword}
       />
    );
};

export default SearchContainer;