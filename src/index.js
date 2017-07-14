import React from "react";
import ReactDOM from "react-dom";
import {
    Router,
    Route,
    hashHistory,
    IndexRoute
} from 'react-router';
import NewsDetail from "./commponents/newsDetail";
import UserCenter from "./commponents/userCenter.js";
import NewsContainer from "./commponents/newsContainer.js";
import App from "./commponents/app"


ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={NewsContainer}/>
                <Route path='/detail/:uniquekey' component={NewsDetail}> </Route>
                <Route path='/usercenter' component={UserCenter}></Route>
            </Route>
        </Router>
    ),
    document.getElementById("root")
)