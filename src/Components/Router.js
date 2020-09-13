import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Movie from "../Routes/Movie";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header";
export default () => {
    return (
        <Router>
            <>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Movie} />
                    <Route path="/tv" component={TV} />
                    <Route path="/search" component={Search} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </Router>
    );
};
