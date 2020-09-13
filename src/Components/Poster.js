import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.div``;
const Vote = styled.span``;
const Title = styled.span``;
const Year = styled.span``;


const Poster = ({id, imageurl, title, voteAverage, year}) => {
    return (
        <Container>
            <ImageContainer>
                <Image></Image>
                <Vote>{voteAverage} / 10</Vote>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>

        </Container>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageurl: PropTypes.string,
    title: PropTypes.string.isRequired,
    voteAverage: PropTypes.number,
    year: PropTypes.string
};

export default Poster;