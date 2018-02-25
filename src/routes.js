import React from 'react';
import Home from './containers/Home';
import Articles from './containers/Articles';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

export default function routes() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/articles/:source_id" component={Articles}></Route>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}