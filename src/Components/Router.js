import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Movie from "../Routes/Movie";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
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
                    <Route path="/movie/:id" component={Detail} />
                    <Route path="/show/:id" component={Detail} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </Router>
    );
};
