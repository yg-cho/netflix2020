import React from 'react';
import PropTypes from 'prop-types';

const MoviePresenter = ({nowPlaying, upComing, popular, error, loading}) => {
    return (
        <div>
            <h1>{nowPlaying.length}</h1>

        </div>
    );
};

MoviePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upComing: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default MoviePresenter;