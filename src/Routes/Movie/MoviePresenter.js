import React from 'react';
import PropTypes from 'prop-types';

const MoviePresenter = ({nowPlaying, upComing, popular, error, loading}) => {
    return (
        <div>
            {nowPlaying && nowPlaying.length > 0 && (
                <div>
                    {nowPlaying.map((movie) => (
                        <span> {movie.title} </span>
                    ))}
                </div>
            )}
            {upComing && upComing.length > 0 && (
                <div>
                    {upComing.map((movie) => (
                        <span> {movie.title}</span>
                    ))}
                </div>
            )}
            {popular && popular.length > 0 && (
                <div>
                    {popular.map((movie) => (
                        <span> {movie.title} </span>
                    ))}
                </div>
            )}

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