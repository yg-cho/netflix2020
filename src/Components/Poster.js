import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
    font-size : 12px;
`;

const Image = styled.div`
    background-image: url(${(props) => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Vote = styled.span`
    bottom: 10px;
    right: 10px;
    position: absolute;
    opacity: 0;
    trasition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
    margin-bottom: 7px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Vote} {
            opacity: 1;
        }
    }    
`;


const Title = styled.span`
    display: block;
    margin-bottom : 3px;
`;
const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;


const Poster = ({id, imageurl, title, voteAverage, year}) => {
    return (
        <Container>
            <ImageContainer>
                {/*<Image bgUrl={`https://image.tmdb.org/t/p/w500${imageurl}`} />*/}
                <Image
                    bgUrl={
                        imageurl
                            ? (`https://image.tmdb.org/t/p/w500${imageurl}`)
                            : (require("../assets/noimage.jpg"))
                    }
                />
                <Vote>
                    <span role={"img"} aria-label={"rating"}>⭐ </span>
                    {voteAverage} / 10
                </Vote>
            </ImageContainer>
            <Title>{title.length > 18 ? `${title.substring(0,18)}...` : title}</Title>
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