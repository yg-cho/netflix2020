import React from 'react';
import PropTypes from 'prop-types';

const TvPresenter = ({topRated, popular, airingToday, error, loading}) => {
    return (
        <div>
            <h1>{topRated.length}</h1>
        </div>
    );
};

TvPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default TvPresenter;