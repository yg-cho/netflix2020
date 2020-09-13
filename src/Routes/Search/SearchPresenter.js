import React from 'react';
import PropTypes from 'prop-types';

const SearchPresenter = ({movies, shows, error, loading, onChange, onSubmit, keyword}) => {
    return (
        <div>
            <h1>{movies.length}</h1>
        </div>
    );
};

SearchPresenter.propTypes = {
    movies: PropTypes.array,
    shows: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired
};

export default SearchPresenter;