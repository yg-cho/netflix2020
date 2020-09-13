import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";


const TvPresenter = ({topRated, popular, airingToday, error, loading}) => {
    return (
        loading ? (
            <Loader/>
        ) : (
            <div>
                {topRated && topRated.length > 0 && (
                    <Section title={"TOP RATED"}>
                        {topRated.map((tv) => (
                            <span> {tv.name} </span>
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title={"POPULAR"}>
                        {popular.map((tv) => (
                            <span> {tv.name} </span>
                        ))}
                    </Section>
                )}
                {airingToday && airingToday.length > 0 && (
                    <Section title={"AIRING TODAY"}>
                        {airingToday.map((tv) => (
                            <span> {tv.name} </span>
                        ))}
                    </Section>
                )}

            </div>
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