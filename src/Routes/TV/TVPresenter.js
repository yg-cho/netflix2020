import React from 'react';
import PropTypes from 'prop-types';

const TvPresenter = ({topRated, popular, airingToday, error, loading}) => {
    return (
        <div>
            {topRated && topRated.length > 0 && (
                <div>
                    {topRated.map((tv) => (
                        <span> {tv.name} </span>
                        ))}
                </div>
            )}
            {popular && popular.length > 0 && (
                <div>
                    {popular.map((tv) => (
                        <span> {tv.name} </span>
                    ))}
                </div>
            )}
            {airingToday && airingToday.length > 0 && (
                <div>
                    {airingToday.map((tv) => (
                        <span> {tv.name} </span>
                    ))}
                </div>
            )}

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