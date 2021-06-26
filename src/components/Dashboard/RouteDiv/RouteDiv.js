import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddPost from '../AddPost/AddPost';
import Admin from '../Admin/Admin';
import ManagePost from '../ManagePost/ManagePost';
const RouteDiv = () => {
    let { path } = useRouteMatch();
    return (
        <div className="">
            <Switch>
                <Route exact path={`${path}/addPost`} >
                    <AddPost />
                </Route>
                <Route path={`${path}/admin`}>
                    <Admin></Admin>
                </Route>
                <Route path={`${path}/mangePost`}>
                    <ManagePost />
                </Route>
            </Switch>
        </div>
    );
};

export default RouteDiv;