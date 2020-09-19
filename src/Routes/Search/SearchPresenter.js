import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

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
            { movies && movies.length > 0 &&
                <div> movie is :
                    {movies.map(item => (
                        <h1>{item.title}</h1>
                    ))}
                </div>
            }

            { shows && shows.length > 0 &&
                <div> show is :
                    {shows.map(item => (
                        <h1>{item.name}</h1>
                    ))}
                </div>
            }

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