import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Loader from "../../Components/Loader";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({
    movies,
    shows,
    error,
    loading,
    onChange,
    onSubmit,
    keyword
}) => {
    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Input
                    placeholder={"Search Movies or Tv shows..."}
                    value={keyword}
                    onChange={onChange}
                />

            </Form>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {movies && movies.length > 0 && (
                        <Section title={"Movie Result :"}>
                            {movies.map(item => (
                                <Poster
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    imageurl={item.poster_path}
                                    voteAverage={item.vote_average}
                                    year={item.release_date}
                                    isMovie={true}
                                />
                            ))}
                        </Section>
                    )}

                    {shows && shows.length > 0 && (
                        <Section title={"Show Result :"}>
                            {shows.map(item => (
                                <Poster
                                    key={item.id}
                                    id={item.id}
                                    title={item.name}
                                    imageurl={item.poster_path}
                                    voteAverage={item.vote_average}
                                    year={item.first_air_date}
                                />
                            ))}
                        </Section>
                    )}
                </>

            )}

        </Container>
    );
};

SearchPresenter.propTypes = {
    movies: PropTypes.array,
    shows: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    keyword: PropTypes.string
};

export default SearchPresenter;