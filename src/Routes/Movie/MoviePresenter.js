import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import Poster from "../../Components/Poster";


const Container = styled.div`
    padding: 0px 10px;
`;

const MoviePresenter = ({nowPlaying, upComing, popular, error, loading}) => {
    return (
        loading ? (
            <Loader />
        ) : (
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title={"NOW PLAING"}>
                        {nowPlaying.map((movie) => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                imageurl={movie.poster_path}
                                voteAverage={movie.vote_average}
                                year={movie.release_date}
                            />
                        ))}
                    </Section>
                )}
                {upComing && upComing.length > 0 && (
                    <Section title={"UPCOMING"}>
                        {upComing.map((movie) => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                imageurl={movie.poster_path}
                                voteAverage={movie.vote_average}
                                year={movie.release_date}
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title={"POPULAR"}>
                        {popular.map((movie) => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                imageurl={movie.poster_path}
                                voteAverage={movie.vote_average}
                                year={movie.release_date}

                            />
                        ))}
                    </Section>
                )}

            </Container>
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