import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding: 0px 10px;
`;

const TvPresenter = ({topRated, popular, airingToday, error, loading}) => {
    return (
        loading ? (
            <Loader/>
        ) : (
            <Container>
                {topRated && topRated.length > 0 && (
                    <Section title={"TOP RATED"}>
                        {topRated.map((tv) => (
                            <Poster
                                key={tv.id}
                                id={tv.id}
                                imageurl={tv.poster_path}
                                title={tv.name}
                                voteAverage={tv.vote_average}
                                year={tv.first_air_date}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title={"POPULAR"}>
                        {popular.map((tv) => (
                            <Poster
                                key={tv.id}
                                id={tv.id}
                                imageurl={tv.poster_path}
                                title={tv.name}
                                voteAverage={tv.vote_average}
                                year={tv.first_air_date}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {airingToday && airingToday.length > 0 && (
                    <Section title={"AIRING TODAY"}>
                        {airingToday.map((tv) => (
                            <Poster
                                key={tv.id}
                                id={tv.id}
                                imageurl={tv.poster_path}
                                title={tv.name}
                                voteAverage={tv.vote_average}
                                year={tv.first_air_date}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}

            </Container>
        )

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