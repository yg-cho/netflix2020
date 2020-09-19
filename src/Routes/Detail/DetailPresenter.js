import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../Components/Loader";
import styled from "styled-components";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;
const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-image: url(${(props) => props.bgImage});
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;
const Content = styled.div`
    display : flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
`;
const Cover = styled.div`
    width: 30%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
    margin-right: 30px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h5`
    font-size: 32px;
    font-weight: 600;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span`
    font-size: 20px;    
`;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size: 16px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
`;


const DetailPresenter = ({result, error, loading}) => {
    return (
        loading
            ? <Loader />
            : (
                <Container>
                    <Backdrop bgImage={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}/>

                    <Content>
                        <Cover bgImage={`https://image.tmdb.org/t/p/w500${result.poster_path}`}/>
                            <Data>
                                <Title>
                                    {result.original_title
                                        ? result.original_title
                                        : result.original_name
                                    }
                                </Title>
                                <ItemContainer>
                                    <Item>
                                        {result.release_date
                                            ? result.release_date
                                            : result.first_air_date
                                        }
                                    </Item>
                                    <Divider>•</Divider>
                                    <Item>
                                        {result.genres && result.genres.map((genre, index) =>
                                            index === result.genres.length - 1
                                                ? genre.name
                                                :`${genre.name} / `
                                        )}
                                    </Item>
                                </ItemContainer>
                                <Overview>{result.overview}</Overview>
                            </Data>
                    </Content>
                </Container>
            )
    );
};

DetailPresenter.propTypes = {
    result : PropTypes.object,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired
};

export default DetailPresenter;