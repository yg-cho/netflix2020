import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";


const MoviePresenter = ({nowPlaying, upComing, popular, error, loading}) => {
    return (
        loading ? (
            <Loader />
        ) : (
            <div>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title={"NOW PLAING"}>
                        {nowPlaying.map((movie) => (
                            <span> {movie.title} </span>
                        ))}
                    </Section>
                )}
                {upComing && upComing.length > 0 && (
                    <Section title={"UPCOMING"}>
                        {upComing.map((movie) => (
                            <span> {movie.title}</span>
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title={"POPULAR"}>
                        {popular.map((movie) => (
                            <span> {movie.title} </span>
                        ))}
                    </Section>
                )}

            </div>
        )


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